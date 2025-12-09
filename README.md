# EBDProject
# FlowPay 

FlowPay is a lightweight, secure, and user-friendly digital wallet application inspired by modern FinTech solutions such as Telda and Revolut.  
It enables users to register, authenticate, manage wallet balances, and send peer-to-peer transfers.
---

## Project Description

FlowPay provides the essential functionalities of a simple digital wallet:

- Secure authentication and user onboarding  
- Wallet balance management  
- Peer-to-peer money transfers  
- Protected API routes using JWT  
- MongoDB Atlas database with Mongoose ODM  
- Clean and responsive interface  

The goal is to deliver a **Minimum Viable Product (MVP)** demonstrating the full MERN stack.

---

##  Team Features Assignment

| Feature # | Feature Name | Description | Member Name | Member ID |
|----------|---------------|-------------|-------------|-----------|
| **1** | **Authentication System** | Registration, login, JWT authentication | Seif Fattah | 19002291 |
| **2** | **Wallet Account Management** | View balance, profile, transaction history | Member 2 | ID |
| **3** | **Money Transfer** | Send money to users, update balances | Member 3 | ID |

---

#  **Feature Details & User Stories**

---

## Feature 1: Authentication System  
### User Story
**As a new user**,  
I want to create an account and log in securely,  
so that I can access FlowPay and use its wallet services.
---

## Feature 2: Wallet Account Management  
### User Story
**As a logged-in user**,  
I want to view my wallet balance and recent transactions,  
so that I can track my financial activity.


---

## Feature 3: Money Transfer  
### User Story
**As a FlowPay user**,  
I want to send money to another user using their phone number,  
so that I can transfer money easily and instantly.

---

#  **Data Modeling (Initial Mongoose Schemas)**

Below are the initial database models required for the MVP.

These schemas satisfy the **Data Modeling requirement** of the project.

---

## **User Schema**

```js

const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  balance: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});
```
## **Account**

```js
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  accountNumber: { type: String, unique: true },
  balance: { type: Number, default: 0 }
});
```
## **Transaction**

```js
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  receiverId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  amount: { type: Number, required: true },

  type: { 
    type: String, 
    enum: ["sent", "received"], 
    required: true 
  },

  createdAt: { type: Date, default: Date.now }
});
```


