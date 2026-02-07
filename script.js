function openResources(section) {
  const links = {
    foundation: [
      "https://www.python.org/doc/",
      "https://www.khanacademy.org/math/linear-algebra",
      "https://www.kaggle.com/learn/python",
      "https://numpy.org/learn/",
      "https://pandas.pydata.org/docs/"
    ],
    core: [
      "https://scikit-learn.org/stable/user_guide.html",
      "https://www.kaggle.com/learn/machine-learning",
      "https://developers.google.com/machine-learning/crash-course"
    ],
    deep: [
      "https://pytorch.org/tutorials/",
      "https://www.deeplearning.ai/",
      "https://cs231n.stanford.edu/"
    ],
    practice: [
      "https://www.kaggle.com/learn/data-cleaning",
      "https://scikit-learn.org/stable/modules/model_evaluation.html"
    ],
    real: [
      "https://www.kaggle.com/competitions",
      "https://github.com/",
      "https://mlflow.org/"
    ]
  };

  // Safety check: if section not found
  if (!links[section]) {
    console.error("No resources found for section:", section);
    return;
  }

  // Open all links in new tabs
  links[section].forEach(link => {
    window.open(link, "_blank");
  });
}
