# File Upload API Documentation

This documentation provides an overview and usage instructions for the File Upload API. The API is built using Express.js and allows users to upload files to the server.

## Installation

To run the code locally, follow these steps:

1. Make sure you have [Node.js](https://nodejs.org) installed on your machine.
2. Clone the repository or download the code files.
3. Open a terminal or command prompt and navigate to the project directory.
4. Install the required dependencies by running the following command:

   ```
   npm install
   ```

## Usage

### Starting the Server

To start the server and run the File Upload API, use the following command:

```
npm start
```

The server will start running on the specified port, and you will see a message indicating the server is running.

### Uploading a File

To upload a file to the server, send a POST request to the `/api/uploads` endpoint with the file and other required information.

#### Request

- **URL**: `/api/uploads`
- **Method**: `POST`
- **Headers**:
  - `Content-Type: multipart/form-data`

- **Form Data**:
  - `file`: The file to be uploaded.
  - `name`: The desired name for the file.

#### Response

If the file is uploaded successfully, the API will respond with a JSON object containing the following information:

- `success`: A boolean indicating the success status of the upload.
- `message`: A message indicating the status of the upload process.
- `filePath`: The new file path on the server.
- `fileName`: The modified filename.

If an error occurs during the upload process, the API will respond with a JSON object containing the following information:

- `success`: A boolean indicating the success status of the request.
- `status`: The HTTP status code indicating the error.
- `message`: A message describing the error.

## Error Handling

The API includes basic error handling to handle exceptions and provide meaningful error messages.

If an error occurs during file upload or any other request handling, the API will respond with an appropriate HTTP status code and an error message in the JSON format.

## Dependencies

The following dependencies are used in this code:

- [express](https://www.npmjs.com/package/express): A fast, unopinionated, minimalist web framework for Node.js.
- [cors](https://www.npmjs.com/package/cors): Middleware to enable CORS (Cross-Origin Resource Sharing) in Express.js.
- [multer](https://www.npmjs.com/package/multer): Middleware for handling `multipart/form-data`, primarily used for file uploads.
- [fs](https://nodejs.org/api/fs.html): The Node.js file system module, used for renaming the uploaded file.
- [path](https://nodejs.org/api/path.html): The Node.js path module, used for manipulating file paths.

## Configuration

The code includes a configuration constant `TEST_PORT` which specifies the port number on which the server will run. You can modify this constant to change the server port if needed.

```javascript
const TEST_PORT = 3301;

app.listen(TEST_PORT, () => console.log(`File Uploads @ ${TEST_PORT}`));
```

## License

This code is provided under the [MIT License](LICENSE). Feel free to modify and use it according to your needs.
