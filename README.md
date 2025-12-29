🛍️ FOREVER – MERN Stack E-commerce Website
FOREVER is a full-stack e-commerce web application built using the MERN stack.
It provides a complete online shopping experience for users along with a dedicated Admin Dashboard for product and order management.

🚀 Live Demo

Frontend:https://shopping-frontend-ten.vercel.app
Admin Panel:https://shopping-admin-seven.vercel.app/
Backend API:https://shopping-backend-phi-six.vercel.app/


🧑‍💻 Tech Stack

Frontend
React.js
React Router
Context API
Axios
Tailwind CSS
Stripe (Payments)


Backend
Node.js
Express.js
MongoDB
Mongoose
JWT Authentication


Tools & Libraries
Stripe API
bcrypt.js
dotenv
JSON Web Token (JWT)


✨ Features
🔐 Authentication
User Signup & Login
JWT-based Authentication
Secure Protected Routes
Logout functionality



🏠 Home Page
Product listing
Latest Collections
Best Sellers section
Clean and responsive UI
Footer displayed on all pages



🛒 Collection Page
Display all available products
Filter by:
Category
Subcategory
Sort products by price
Search feature (popup search with close option)


📦 Product Page
View individual product details
Select product size
Add product to cart



🛍️ Cart Page
View added products
Increase / decrease quantity
Remove products from cart
Cart total calculation
Proceed to checkout



💳 Checkout & Payment
Cash on Delivery (COD)
Stripe Payment Gateway
Successful order placement
Automatic navigation to Orders page after payment



📜 Orders Page
View all user orders
Order status updates visible to user
Secure access (authenticated users only)



ℹ️ About Page
Information about the FOREVER e-commerce platform



📞 Contact Page
Contact information page for users



🧑‍💼 Admin Dashboard
➕ Add Product
Add new products
Products instantly reflected on the user website

📃 Product List
View all products
Delete products

📦 Orders Management
View all user orders
Update order status
Status changes reflect on user side



🗂️ Project Structure
Forever-Ecommerce/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   └── assets/
│
├── admin/
│   ├── src/
│   └── pages/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
└── README.md


⚙️ Environment Variables
Create a .env file in the backend folder:
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
ADMIN_EMAIL=admin_email
ADMIN_PASSWORD=admin_password


🛠️ Installation & Setup
Clone the repository
git clone https://github.com/your-username/forever-ecommerce.git
cd forever-ecommerce

Backend Setup
cd backend
npm install
npm start

Frontend Setup
cd frontend
npm install
npm run dev

Admin Panel Setup
cd admin
npm install
npm run dev




👤 Author
Manju 
Frontend / MERN Stack Developer


