export interface DetailedQuestion {
    /** The Question #/ID */
    question_number: number;
    /** The full question prompt */
    question: string;
    /** List of answer choices*/
    answer_choices: string[];
    /** Whether or not the student has submitted this answer. */
    
}