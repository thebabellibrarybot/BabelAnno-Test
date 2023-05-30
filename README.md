# Historic Document Annotation App

The Historic Document Annotation App is a web application designed for annotating historic documents, specifically for the purpose of data annotation using a thoughtful paleography approach. The app provides a user-friendly interface to annotate documents and supports versioning to facilitate the annotation process. The annotated data can be used for training machine learning models, particularly in the field of Optical Character Recognition (OCR) using a Long Short-Term Memory (LSTM) neural network.

## Features

- **Document Annotation**: The app allows users to annotate historic documents by drawing bounding boxes around specific areas of interest, such as text or significant elements in the document.

- **Versioning**: The app supports versioning, enabling users to create and manage multiple versions of annotations for a single document. This feature is particularly useful for tracking the progress of annotations and comparing different annotation iterations.

- **Text Annotation**: In addition to drawing bounding boxes, the app provides a text annotation feature that allows users to add textual information to specific areas of the document. This text annotation can provide additional context or insights related to the annotated elements.

- **Upload Image**: Users can upload images of historic documents to the app for annotation. The app supports various image formats commonly used in document digitization.

## Getting Started

To run the Historic Document Annotation App locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies using a package manager like npm or yarn.
3. Ensure that you have the necessary permissions and access to the required resources (e.g., images, annotation data).
4. Start the app by running the appropriate command (e.g., `npm start` or `yarn start`).
5. Access the app through a web browser by navigating to the provided URL (usually `http://localhost:3000`).

## Usage

1. Upload Document: On the app's home page, click the "Upload Document" button to upload a historic document image for annotation. The supported image formats include JPEG, PNG, and TIFF.

2. Annotation: Once the document is uploaded, it will be displayed in the annotation interface. Use the mouse to draw bounding boxes around areas of interest in the document. Double-clicking will start the annotation, and moving the mouse will draw the bounding box. Release the mouse button to complete the annotation. Right-clicking will cancel the ongoing annotation.

3. Text Annotation: Alongside the drawing annotations, the app provides a text annotation feature. Each annotated bounding box can be associated with textual information. Click on a bounding box to select it, and enter the relevant text in the input field that appears. The text annotation can provide additional details or explanations related to the annotated element.

4. Versioning: The app supports versioning to track the progress and changes in annotations. Users can create new versions of annotations for a document and switch between versions to compare and analyze the differences.

5. Export Annotations: Annotations can be exported in JSON files, XML, PAGE XML (required for [kraken ocr](https://kraken.re/main/index.html)), as well as COCO, and txt formats.

## Contributing

Contributions to the Historic Document Annotation App are welcome! If you encounter any issues, have suggestions for improvements, or would like to add new features, please submit an issue or pull request on the GitHub repository.

## License

The Historic Document Annotation App is released under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute the app in accordance with the terms and conditions of the license.

## Acknowledgments

We would like to acknowledge the support and contributions of the developers and

 contributors who have made this app possible. Their dedication and effort in building and maintaining the app are greatly appreciated.

## Contact

For any inquiries or further information, please contact [jtucker0110@gmail.com](jtucker0110@gmail.com).
