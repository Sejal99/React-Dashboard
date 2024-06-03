# Project Name

## Description

This project is aimed at showcasing various components and functionalities, including a counter with animations, a form with local storage functionality, a rich text editor, user result display, and a footer section with Bezier curve easing animations.

## Component Structure

### Pages (Parent Components)

1. Home


### Home Page Components

1. Counter
2. Form
3. Rich Text Editor
4. User Result Component
5. Bezier Footer

#### Reusable Components

- Input Field Components
- Button Component (with hover effect)
- ... (other reusable components)

## State Management Choices

- **Global State Management**: Utilizing Redux Toolkit for storing user data from the form and displaying it in the result component.
- **Count State**: Used for keeping track of the counter number along with add, deduct, and reset handlers.

## Hooks Used for State Management

- `useState`: For local state management.
- `useSelector` and `useDispatch`: For global state management using Redux Toolkit.

## Local Setup

1. Clone the project repository:
   ```bash
   git clone <repo-url>
   cd Dashboard
   npm install
   npm start
