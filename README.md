# Graduation Party Website

A simple, interactive website for a graduation party. Guests can view the invitation, RSVP, and leave messages on a public message board.

## Tech Stack

*   **Frontend**: HTML, CSS, Vanilla JavaScript
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Message Data Source**: Google Sheets, accessed via a Google Apps Script deployed as a web app.

## Setup and Running Locally (with Vite)

1.  **Clone the repository (if applicable):**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**
    (Assuming Vite and potentially other dev dependencies are listed in `package.json`)
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the project root and add your Google Apps Script web app URL:
    ```
    VITE_WEB_APP_URL=https://your-google-apps-script-url/.../exec
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    This will typically start a local server (e.g., at `http://localhost:5173`).

## Building for Production (with Vite)

```bash
npm run build
# or
yarn build
```
This will create a `dist` folder with optimized static assets ready for deployment.

When deploying, ensure you configure the `VITE_WEB_APP_URL` environment variable in your chosen platform's settings.

## Notes

*   The message board fetches data from a Google Apps Script. Ensure the Apps Script is correctly deployed and permissions are set to allow access.