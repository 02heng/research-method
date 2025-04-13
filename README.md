# research-vis

This project is a web application designed to visualize research papers through interactive charts and cards. The application features a left sidebar displaying histograms for paper distribution by year and types of AI tools used, while the right side showcases cards containing detailed information about individual papers.

## Project Structure

```
research-vis
├── src
│   ├── components
│   │   ├── Charts
│   │   │   ├── HistogramYear.ts
│   │   │   └── HistogramTools.ts
│   │   ├── PaperCard
│   │   │   └── PaperCard.ts
│   │   └── Layout
│   │       ├── Header.ts
│   │       └── Sidebar.ts
│   ├── types
│   │   └── index.ts
│   ├── utils
│   │   ├── data.ts
│   │   └── helpers.ts
│   ├── styles
│   │   ├── main.css
│   │   └── components.css
│   └── app.ts
├── public
│   └── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Features

- **Histograms**: Visualize the distribution of research papers by year and the types of AI tools used.
- **Paper Cards**: Display detailed information about each paper, including title, authors, and DOI.
- **Responsive Design**: The layout adapts to different screen sizes for optimal viewing.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd research-vis
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```
This will launch the application in your default web browser.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.