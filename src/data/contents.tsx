import React from "react";

export type ContentItem = {
    title: string;
    link: string;
    type: string;
    topics: Array<string>;
    description: string;
}


const CONTENTS: ContentItem[] = [
    {
        title: "LightGBM",
        link: "https://github.com/microsoft/lightgbm",
        type: "GitHub",
        topics:["python", "r", "gradient-boosting", "machine-learning", "lightgbm", "distrbitued", "kaggle", "gbrt", "decision-tress", "parallel"],
        description: "A fast, distributed, high performance gradient boosting (GBT, GBDT, GBRT, GBM or MART) framework based on decision tree algorithms, used for ranking, classification and many other machine learning tasks.",
    },
    {
        title: "FLAML",
        link: "https://github.com/microsoft/FLAML",
        type: "GitHub",
        topics:["python", "data-science", "machine-learning", "automl", "nlp", "deep-learning", "random-forest", "scikit-learn", "tuning", "finetuning", "forecasting", "hyperparam"],
        description: "A fast library for AutoML and tuning.",
    }
]

export default CONTENTS;