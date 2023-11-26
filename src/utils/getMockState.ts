import { RootState } from "@/redux/quizData/quizDataTypes";

const state: RootState = {
  quizSlice: {
    numberCorrectOptions: 4,
    optionsChosen: [],
    title: "",
    quizzes: [],
  },
};

export default function getMockState() {
  return {
    quizSlice: {
      quizzes: [
        {
          title: "HTML",
          icon: "./assets/images/icon-html.svg",
          questions: [
            {
              question: "What does HTML stand for?",
              options: [
                "Hyper Trainer Marking Language",
                "Hyper Text Marketing Language",
                "Hyper Text Markup Language",
                "Hyper Text Markup Leveler",
              ],
              answer: "Hyper Text Markup Language",
            },
            {
              question:
                "Which of the following is thecorrect tructure for an HTML document?",
              options: [
                "<html><head></head><body></body></html>",
                "<head><html></html><body></body></head>",
                "<body><head></head><html></html></body>",
                "<html><body></body><head></head></html>",
              ],
              answer: "<html><head></head><body></body></html>",
            },
            {
              question:
                "Which HTML element is used to define thetitl of a document?",
              options: ["<head>", "<title>", "<header>", "<top>"],
              answer: "<title>",
            },
            {
              question: "What is the purpose of the <body> tag inHML?",
              options: [
                "It defines the document's head section.",
                "It contains all the content such as text, images, and links.",
                "It is used to define the main content of an HTML document.",
                "It specifies the body of the email content in HTML.",
              ],
              answer:
                "It contains all the content such as text, images, and links.",
            },
            {
              question: "Which HTML tag is used to create ahyperlin?",
              options: ["<hyperlink>", "<link>", "<a>", "<href>"],
              answer: "<a>",
            },
            {
              question: "Which tag is used to display images in HTM?",
              options: ["<img>", "<image>", "<src>", "<pic>"],
              answer: "<img>",
            },
            {
              question:
                "What attribute is used to provide thepathof an image in the <img> tag?",
              options: ["link", "src", "href", "url"],
              answer: "src",
            },
            {
              question: "Which HTML tag is used to create anunordere list?",
              options: ["<ul>", "<ol>", "<list>", "<li>"],
              answer: "<ul>",
            },
            {
              question: "What does the <br> tag do?",
              options: [
                "It breaks the text into two sections.",
                "It creates a bold text.",
                "It inserts a line break.",
                "It adds a new row in a table.",
              ],
              answer: "It inserts a line break.",
            },
            {
              question: "In HTML, what does the `fieldset` tag d?",
              options: [
                "It is used to group related data in a form.",
                "It sets the field to a fixed size.",
                "It automatically validates the fields within a form.",
                "It hides the fields in a form.",
              ],
              answer: "It is used to group related data in a form.",
            },
          ],
        },
      ],
      title: "HTML",
      optionsChosen: [],
      numberCorrectOptions: 5,
    },
  };
}
