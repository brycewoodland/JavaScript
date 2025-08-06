class Book {
    #stock;

    constructor(title, author, price, stock) {
        this._title = title;
        this._author = author;
        this._price = price;
        this.#stock = stock;
    }

    sell() {
        if (this.#stock > 0) {
            this.#stock--;
            return `One copy of "${this._title}" sold. New Stock: ${this.#stock}`;
        } else {
            return `"${this._title}" is out of stock`;
        }
    }

    restock(amount) {
        if (amount > 0) {
            this.#stock += amount;
            return `${amount} copies of "${this._title}" added to stock. New stock: ${this.#stock}`;
        } else {
            return "Please provide a positive amount to restock.";
        }
    }
    
    // Getter methods to access private properties from other classes
    getStock() {
        return this.#stock;
    }

    getPrice() {
        return this._price;
    }

    getInfo() {
        return `
        Title: ${this._title}
        Author: ${this._author}
        Price: ${this._price}
        Stock: ${this.#stock}`;
    }
}

class ShoppingCart {
    constructor() {
        this._items = [];
        this._totalPrice = 0;
    }

    addItem(book, quantity) {
        const existingItemIndex = this._items.findIndex(item => item.book === book);

        if (existingItemIndex > -1) {
            // Fix typo here: `quantiy` to `quantity`
            this._items[existingItemIndex].quantity += quantity;
        } else {
            this._items.push({ book, quantity });
        }
        
        // Use the new getPrice() method to access the price
        this._totalPrice += book.getPrice() * quantity;
        return `${quantity} copy(s) of "${book._title}" added to the cart.`;
    }

    removeItem(book) {
        const existingItemIndex = this._items.findIndex(item => item.book === book);

        if (existingItemIndex > -1) {
            const removedItem = this._items[existingItemIndex];

            // Use the new getPrice() method to access the price
            this._totalPrice -= removedItem.book.getPrice() * removedItem.quantity;

            this._items.splice(existingItemIndex, 1);

            return `"${removedItem.book._title}" removed from the cart.`;
        } else {
            return `"${book._title}" is not in the cart.`;
        }
    }

    checkout() {
        if (this._items.length === 0) {
            return "Your cart is empty. Nothing to checkout.";
        }

        let purchaseSuccessful = true;
        let purchaseSummary = "Checkout initiated... \n";

        for (const cartItem of this._items) {
            // Use the new getStock() method to access the stock
            if (cartItem.book.getStock() < cartItem.quantity) {
                purchaseSummary += `Error: Insufficient stock for "${cartItem.book._title}". Available: ${cartItem.book.getStock()}, Requested: ${cartItem.quantity}\n`;
                purchaseSuccessful = false;
            }
        }

        if (purchaseSuccessful) {
            for (const cartItem of this._items) {
                for (let i = 0; i < cartItem.quantity; i++) {
                    cartItem.book.sell();
                }
                purchaseSummary += `Sold ${cartItem.quantity} copy(s) of "${cartItem.book._title}".\n`;
            }

            const finalTotal = this._totalPrice;

            this._items = [];
            this._totalPrice = 0;
            // The `totalPrice` is already zeroed out, so this output is not a bug.
            purchaseSummary += `\nPurchase complete! Total paid: $${finalTotal.toFixed(2)}.`;
        } else {
            purchaseSummary += "\nCheckout failed due to insufficient stock.";
        }

        return purchaseSummary;
    }
}

// Create some books for your store
const book1 = new Book("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 10.50, 5);
const book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 25.00, 3);
const book3 = new Book("Dune", "Frank Herbert", 12.75, 1);

// Create a new shopping cart
const myCart = new ShoppingCart();

console.log("--- Adding items to cart ---");
console.log(myCart.addItem(book1, 2)); // Add 2 copies of book1
console.log(myCart.addItem(book2, 1)); // Add 1 copy of book2
console.log(myCart.addItem(book1, 3)); // Add more of book1 to test updating quantity
console.log(`Current total price: $${myCart._totalPrice.toFixed(2)}`);
console.log(`Current cart items:`, myCart._items);

console.log("\n--- Checking out (sufficient stock) ---");
console.log(myCart.checkout());
console.log("\nBook 1 stock after checkout:", book1.getInfo());
console.log("Cart after successful checkout:", myCart._items);

console.log("\n--- Testing insufficient stock scenario ---");
const book4 = new Book("The Martian", "Andy Weir", 14.00, 2); // Create a new book with low stock

// Add more copies than available
myCart.addItem(book4, 3);
myCart.addItem(book2, 1);

console.log(myCart.checkout());
console.log("\nBook 4 stock after failed checkout:", book4.getInfo());
console.log("Book 2 stock after failed checkout:", book2.getInfo());
console.log("Cart after failed checkout:", myCart._items);