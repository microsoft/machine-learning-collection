type CATEGORY =  'github' | 'youtube' | 'other';

interface Content {
  title: string,
  link: string,
  type: CATEGORY,
  topics: string[],
  description: string
}

const CONTENTS:Content[] = [
  {
    title: "LightGBM",
    link: "https://github.com/microsoft/lightgbm",
    type: "github",
    topics: [
      "python",
      "r",
      "gradient-boosting",
      "machine-learning",
      "lightgbm",
      "distrbitued",
      "kaggle",
      "gbrt",
      "decision-tress",
      "parallel",
    ],
    description:
      "A fast, distributed, high performance gradient boosting (GBT, GBDT, GBRT, GBM or MART) framework based on decision tree algorithms, used for ranking, classification and many other machine learning tasks.",
  },
  {
    title: "FLAML FLAML FLAML FLAML FLAML FLAMLFLAML FLAML FLAML FLAML FLAML FLAML",
    link: "https://github.com/microsoft/FLAML",
    type: "github",
    topics: [
      "python",
      "data-science",
      "machine-learning",
      "automl",
      "nlp",
      "deep-learning",
      "random-forest",
      "scikit-learn",
      "tuning",
      "finetuning",
      "forecasting",
      "hyperparam",
    ],
    description: "A fast library for AutoML and tuning.",
  },
  {
    title: "Neural Network Intelligence",
    link: "https://github.com/microsoft/nni",
    type: "github",
    topics: [
      "python",
      "data-science",
      "machine-learning",
      "deep-learning",
      "nas",
      "mlops",
      "automl",
      "kaggle",
    ],
    description:
      "An open source AutoML toolkit for automate machine learning lifecycle, including feature engineering, neural architecture search, model compression and hyper-parameter tuning.",
  },
  {
    title: "LightGBM2",
    link: "https://github.com/microsoft/lightgbm",
    type: "github",
    topics: [
      "python",
      "r",
      "gradient-boosting",
      "machine-learning",
      "lightgbm",
      "distrbitued",
      "kaggle",
      "gbrt",
      "decision-tress",
      "parallel",
    ],
    description:
      "A fast, distributed, high performance gradient boosting (GBT, GBDT, GBRT, GBM or MART) framework based on decision tree algorithms, used for ranking, classification and many other machine learning tasks.",
  },
  {
    title: "FLAML2",
    link: "https://github.com/microsoft/FLAML",
    type: "github",
    topics: [
      "python",
      "data-science",
      "machine-learning",
      "automl",
      "nlp",
      "deep-learning",
      "random-forest",
      "scikit-learn",
      "tuning",
      "finetuning",
      "forecasting",
      "hyperparam",
    ],
    description: "A fast library for AutoML and tuning.",
  },
  {
    title: "Neural Network Intelligence2 Neural ",
    link: "https://github.com/microsoft/nni",
    type: "github",
    topics: [
      "python",
      "data-science",
      "machine-learning",
      "deep-learning",
      "nas",
      "mlops",
      "automl",
      "kaggle",
    ],
    description:
      "An open source AutoML toolkit for automate machine learning lifecycle, including feature engineering, neural architecture search, model compression and hyper-parameter tuning.",
  },
];

export default CONTENTS;
