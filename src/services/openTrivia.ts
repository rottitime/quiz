import axios from "axios";

//logic for fetching data
// import { suffleArray } from "./utils";

const suffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5)


export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & { answers: string[] }

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`

    const { data } = await axios.get(endpoint)

    return data.results.map((question: Question) => ({
        ...question,
        answers: suffleArray([...question.incorrect_answers, question.correct_answer])
    }
    ))
}