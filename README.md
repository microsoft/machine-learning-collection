# Machine Learning Collection
Microsoft contributing libraries, tools, recipes, sample codes and workshop contents for machine learning & deep learning.

## Table of Contents

- [Boosting](#boosting)
- [AutoML](#automl)
- [Neural Network](#neural-network)
- [Graph&Network](#graph--network)
- [Vision](#vision)
- [Time Series](#time-series)
- [NLP](#nlp)
- [Online Machine Learning](#interactive-machine-learning)
- [Recommendation](#recommendation)
- [Distributed](#distributed)
- [Causal Inference](#causal-inference)
- [Responsible AI](#responsible-ai)
- [Optimization](#optimization)
- [Reinforcement Learning](#reinforcement-learning)
- [Windows](#windows)
- [Datasets](#datasets)
- [Debug](#debug)
- [Pipeline](#pipeline)
- [Platform](#platform)
- [Tagging](#tagging)
- [Developer tool](#developer-tool)
- [Sample Code](#sample-code)
- [Workshop](#workshop)
- [Book](#book)
- [Learning](#learning)
- [Blog, News & Webinar](#blog-news--webinar)

---

### Boosting
- [LightGBM](https://github.com/microsoft/LightGBM) - A fast, distributed, high performance gradient boosting framework.
- [LightGBM benchmarking suite](https://github.com/microsoft/lightgbm-benchmark) - Benchmark tools for LightGBM.
- [Explainable Boosting Machines](https://github.com/interpretml/interpret) - interpretable model developed in Microsoft Research using bagging, gradient boosting, and automatic interaction detection to estimated generalized additive models.
- [Cyclic Boosting Machines](https://github.com/microsoft/CBM) - An explainable supervised machine learning algorithm specifically for predicting count-data, such as sales and demand.

### AutoML
- [Neural Network Intelligence](https://github.com/microsoft/nni) - An open source AutoML toolkit for automate machine learning lifecycle, including feature engineering, neural architecture search, model compression and hyper-parameter tuning.
- [Archai](https://github.com/microsoft/archai) - Reproducible Rapid Research for Neural Architecture Search (NAS).
- [FLAML](https://github.com/microsoft/FLAML) - A fast and lightweight AutoML library.
- [Azure Automated Machine Learning](https://docs.microsoft.com/en-us/azure/machine-learning/concept-automated-ml) - Automated Machine Learning for Tabular data (regression, classification and forecasting) by Azure Machine Learning
- [Cream](https://github.com/microsoft/Cream) - A collection of Microsoft NAS and Vision Transformer work.


### Neural Network
- [PyMarlin](https://github.com/microsoft/PyMarlin) - Lightweight Deep Learning Model Training library based on PyTorch.
- [bayesianize](https://github.com/microsoft/bayesianize) - A Bayesian neural network wrapper in pytorch.
- [O-CNN](https://github.com/microsoft/O-CNN) - Octree-based convolutional neural networks for 3D shape analysis.
- [ResNet](https://github.com/KaimingHe/deep-residual-networks) - deep residual network.
- [CNTK](https://github.com/microsoft/CNTK) - microsoft cognitive toolkit (CNTK), open source deep-learning toolkit.
- [InfiniBatch](https://github.com/microsoft/infinibatch) - Efficient, check-pointed data loading for deep learning with massive data sets.
- [Models under Hugging Face](https://huggingface.co/microsoft) - Microsoft shares transformer models at Hugging Face. 51 pretrained models (as of June 28, 2021).
- [Muzic](https://github.com/microsoft/muzic) - Music Understanding and Generation with Artificial Intelligence.

### Graph & Network
- [graspologic](https://github.com/microsoft/graspologic) - utilities and algorithms designed for the processing and analysis of graphs with specialized graph statistical algorithms.
- [TF Graph Neural Network Samples](https://github.com/microsoft/tf-gnn-samples) - tensorFlow implementations of graph neural networks.
- [ptgnn](https://github.com/microsoft/ptgnn) - PyTorch Graph Neural Network Library
- [StemGNN](https://github.com/microsoft/StemGNN) - spectral temporal graph neural network (StemGNN) for multivariate time-series forecasting.
- [SPTAG](https://github.com/Microsoft/SPTAG) - a distributed approximate nearest neighborhood search (ANN) library.
- [DiskANN](https://github.com/microsoft/DiskANN) - Scalable graph based indices for approximate nearest neighbor search.
- 
### Vision
- [Microsoft Vision Model ResNet50](https://www.microsoft.com/en-us/research/blog/microsoft-vision-model-resnet-50-combines-web-scale-data-and-multi-task-learning-to-achieve-state-of-the-art/) - a large pretrained vision ResNet-50 model using search engine's web-scale image data.
- [Oscar](https://github.com/microsoft/Oscar) - Object-Semantics Aligned Pre-training for Vision-Language Tasks.
- [TorchGeo](https://github.com/microsoft/torchgeo) - a PyTorch domain library, similar to torchvision, that provides datasets, transforms, samplers, and pre-trained models specific to geospatial data.
- [Swin Transformer](https://github.com/microsoft/Swin-Transformer) - an official implementation for "Swin Transformer: Hierarchical Vision Transformer using Shifted Windows".

### Time Series
- [luminol](https://github.com/linkedin/luminol) - anomaly detection and correlation library.
- [SR-CNN](https://github.com/microsoft/anomalydetector) - Spectral Residual based anomaly detection algorithm, SR-CNN implementation.
- [Greykite](https://github.com/linkedin/greykite) - flexible, intuitive and fast forecasts through its flagship algorithm, Silverkite.
- [Temporal Cluster Matching for Change Detection of Structures from Satellite Imagery](https://github.com/microsoft/temporal-cluster-matching) - An implementation of the temporal cluster matching method for detecting change in structure footprints from time series of remotely sensed imagery.
- [Microsoft Finance Time Series Forecasting Framework](https://github.com/microsoft/finnts) - a forecasting package that utilizes cutting-edge time series forecasting and parallelization on the cloud to produce accurate forecasts for financial data.
- [FOST](https://github.com/microsoft/FOST) - an easy-use tool for spatial-temporal forecasting

### NLP
- [T-ULRv2](https://www.microsoft.com/en-us/research/blog/microsoft-turing-universal-language-representation-model-t-ulrv2-tops-xtreme-leaderboard/) - Turing multilingual language model.
- [Turing-NLG](https://www.microsoft.com/en-us/research/blog/turing-nlg-a-17-billion-parameter-language-model-by-microsoft/) - Turing Natural Language Generation, 17 billion-parameter language model.
- [DeBERTa](https://github.com/microsoft/DeBERTa) - Decoding-enhanced BERT with Disentangled Attention
- [UniLM](https://github.com/microsoft/unilm) - Unified Language Model Pre-training / Pre-training for NLP and Beyond
- [Unicoder](https://github.com/microsoft/Unicoder) - Unicoder model for understanding and generation.
- [NeuronBlocks](https://github.com/microsoft/NeuronBlocks) - building your nlp dnn models like playing lego
- [Multilingual Model Transfer](https://github.com/microsoft/Multilingual-Model-Transfer) -  new deep learning models for bootstrapping language understanding models for languages with no labeled data using labeled data from other languages.
- [MT-DNN](https://github.com/microsoft/MT-DNN) - multi-task deep neural networks for natural language understanding.
- [inmt](https://github.com/microsoft/inmt) - interactive neural machine trainslation-lite
- [OpenKP](https://github.com/microsoft/OpenKP) - automatically extracting keyphrases that are salient to the document meanings is an essential step in semantic document understanding.
- [DeText](https://github.com/linkedin/detext) - a deep neural text understanding framework for ranking and classification tasks.
- [Genalog](https://github.com/microsoft/genalog) - an open source, cross-platform python package allowing generation of synthetic document images with custom degradations and text alignment capabilities.
- [FastFormers](https://github.com/microsoft/fastformers) - highly efficient transformer models for NLU.
- [VERSEAGILITY](https://github.com/microsoft/verseagility) - a Python-based toolkit to ramp up your custom natural language processing (NLP) task, allowing you to bring your own data and bring models into production. It is a central component of the Microsoft Data Science Toolkit.
- [DPU Utilities](https://github.com/Microsoft/dpu-utils) - Utilities used by the Deep Program Understanding team.
- [KEAR](https://github.com/microsoft/KEAR) - Official code for achieving human parity on CommonsenseQA with External Attention.
- [Prompt Engine](https://github.com/microsoft/prompt-engine-py) - A utility library for creating and maintaining prompts for Large Language Models.

### Online Machine Learning
- [Vowpal Wabbit](https://vowpalwabbit.org/) - fast, efficient, and flexible online machine learning techniques for reinforcement learning, supervised learning, and more. 

### Recommendation
- [Recommenders](https://github.com/microsoft/recommenders) - examples and best practics for building recommendation systems (A2SVD, DKN, xDeepFM, LightGBM, LSTUR, NAML, NPA, NRMS, RLRMC, SAR, Vowpal Wabbit are invented/contributed by Microsoft).
- [GDMIX](https://github.com/linkedin/gdmix) - A deep ranking personalization framework
- [rankerEval](https://github.com/microsoft/rankerEval) - A fast numpy-based implementation of ranking metrics for information retrieval and recommendation.


### Distributed
- [DeepSpeed](https://github.com/microsoft/DeepSpeed) - DeepSpeed is a deep learning optimization library that makes distributed training easy, efficient, and effective.
- [MMLSpark](https://github.com/Azure/mmlspark) - machine learning library on spark.
- [photon-ml](https://github.com/linkedin/photon-ml) - a scalable machine learning library on apache spark.
- [TonY](https://github.com/linkedin/TonY) - framework to natively run deep learning frameworks on apache hadoop.
- [isolation-forest](https://github.com/linkedin/isolation-forest) - A Spark/Scala implementation of the isolation forest unsupervised outlier detection algorithm.

### Causal Inference
- [EconML](https://github.com/microsoft/EconML) - Python package for estimating heterogeneous treatment effects from observational data via machine learning. 
- [DoWhy](https://github.com/microsoft/dowhy) - Python library for causal inference that supports explicit modeling and testing of causal assumptions. 

### Responsible AI
- [InterpretML](https://interpret.ml/) - a toolkit to help understand models and enable responsbile machine learning.
    - [Interpret Community](https://github.com/interpretml/interpret-community) - extends interpret repo with additional interpretability techniques and utility functions.
    - [DiCE](https://github.com/interpretml/DiCE) - diverse counterfactual explanations.
    - [Interpret-Text](https://github.com/interpretml/interpret-text) - state-of-the-art explainers for text-based ml models and visualize with dashboard.
- [fairlearn](https://github.com/fairlearn/fairlearn) - python package to assess and improve fairness of machine learning models.
- [LiFT](https://github.com/linkedin/LiFT) - linkedin fairness toolkit.
- [RobustDG](https://github.com/microsoft/robustdg) - Toolkit for building machine learning models that generalize to unseen domains and are robust to privacy and other attacks.
- [SHAP](https://github.com/slundberg/shap) - a game theoretic approach to explain the output of any machine learning model (scott lundbert, Microsoft Research).
- [LIME](https://github.com/marcotcr/lime) - explaining the predictions of any machine learning classifier (Marco, Microsoft Research).
- [BackwardCompatibilityML](https://github.com/microsoft/BackwardCompatibilityML) - Project for open sourcing research efforts on Backward Compatibility in Machine Learning
- [confidential-ml-utils](https://github.com/Azure/confidential-ml-utils) - Python utilities for training and deploying ML models against data you can't see.
- [presidio](https://github.com/Microsoft/presidio) - context aware, pluggable and customizable data protection and anonymization service for text and images.
    - [Presidio-research](https://github.com/microsoft/presidio-research) - This package features data-science related tasks for developing new recognizers for Presidio. 
- [Confidential ONNX Inference Server](https://github.com/microsoft/onnx-server-openenclave) - An Open Enclave port of the ONNX inference server with data encryption and attestation capabilities to enable confidential inference on Azure Confidential Computing.
- [Responsible AI Toolbox](https://github.com/microsoft/responsible-ai-toolbox) - responsible AI user interfaces for Fairlearn, interpret-community, and Error Analysis, as well as foundational building blocks that they rely on.
- [Responsible AI Mitigations](https://github.com/microsoft/responsible-ai-toolbox-mitigations) - Python library for implementing mitigations and performing data balance analysis for Responsible AI.
- [Error Analysis](https://erroranalysis.ai/) - A toolkit to help analyze and improve model accuracy.
- [Secure Data Sandbox](https://github.com/microsoft/secure-data-sandbox) - A toolkit for conducting machine learning trials against confidential data.
- [shrike](https://azure.github.io/shrike/) - Python utilities to aid "compliant experiment" in Azure Machine Learning - training ML models without seeing the training data.
- [HAX Toolkit](http://aka.ms/haxtoolkit) - The Human-AI eXperience (HAX) Toolkit is a set of practical tools for creating human-AI experiences with people in mind from the beginning. 
- [GAM Changer](https://github.com/interpretml/gam-changer) - Edit machine learning models to reflect human knowledge and values.
- [AdaTest](https://github.com/microsoft/adatest) - Find and fix bugs in natural language machine learning models using adaptive testing.


### Optimization
- [ONNXRuntime](https://github.com/microsoft/onnxruntime) - cross-platfom, high performance ML inference and training accelerator.
    - [ONNX Runtime for PyTorch](https://github.com/pytorch/ort) - Accelerate PyTorch models with ONNX Runtime.
    - [ONNX Runtime Training Examples](https://github.com/microsoft/onnxruntime-training-examples) - examples for using onnx runtime for model training.
    - [ONNX Runtime Inference Examples](https://github.com/microsoft/onnxruntime-inference-examples) - examples for using onnx runtime for model inference.
    - [ONNX Converter](https://github.com/microsoft/onnxconverter-common) - common utilities for onnx converters.
    - [ONNX.js](https://github.com/microsoft/onnxjs) - run onnx models using javascript.
    - [ONNX.js Demo](https://github.com/microsoft/onnxjs-demo) - demos for ONNX.js.
    - [Olive](https://github.com/microsoft/OLive) - a sequence of docker images that automates the process of ONNX model shipping.
- [Hummingbird](https://github.com/microsoft/hummingbird) - compile trained ml model into tensor computation for faster inference.
- [EdgeML](https://github.com/microsoft/EdgeML) - provides code for machine learning algorithms for edge devices developed at Microsoft Research India.
- [DirectML](https://github.com/microsoft/DirectML) - high-performance, hardware-accelerated DirectX 12 library for machine learning.
- [MMdnn](https://github.com/microsoft/MMdnn) - MMdnn is a set of tools to help users inter-operate among different deep learning frameworks. E.g. model conversion and visualization.
- [inifinibatch](https://github.com/microsoft/infinibatch) - Efficient, check-pointed data loading for deep learning with massive data sets.
- [InferenceSchema](https://github.com/Azure/InferenceSchema) - Schema decoration for inference code
- [nnfusion](https://github.com/microsoft/nnfusion) - flexible and efficient deep neural network compiler.
- [Accera](https://github.com/microsoft/Accera) - Open source cross-platform compiler for compute-intensive loops used in AI algorithms, from Microsoft Research.

### Reinforcement Learning
- [AirSim](https://github.com/microsoft/AirSim) - open source simulator for autonomous vehicles build on unreal engine / unity from microsoft research.
- [TextWorld](https://github.com/microsoft/TextWorld) - TextWorld is a sandbox learning environment for the training and evaluation of reinforcement learning (RL) agents on text-based games.
- [Moab](https://github.com/microsoft/moab) - Project Moab, a new open-source balancing robot to help engineers and developers learn how to build real-world autonomous control systems with Project Bonsai.
- [MARO](https://github.com/microsoft/maro) - multi-agent resource optimization (MARO) platfom.
- [Training Data-Driven or Surrogate Simulators](https://github.com/microsoft/datadrivenmodel) - build simulation from data for use in RL and Bonsai platform for machine teaching.
- [Bonsai](https://azure.microsoft.com/en-us/services/project-bonsai/) - low code industrial machine teaching platform.
    - [Bonsai Python SDK](https://github.com/BonsaiAI/bonsai3-py) - A python library for integrating data sources with Bonsai BRAIN.

- [SEGAR](https://github.com/microsoft/segar) - Sandbox environment for generalizable agent research.

### Security
- [counterfit](https://github.com/Azure/counterfit) - a CLI that provides a generic automation layer for assessing the security of ML models.
- [Federated Learning Simulation Framework](https://github.com/microsoft/fl-simulation) - a flexible framework for running experiments with PyTorch models in a simulated Federated Learning (FL) environment.
- [FLUTE](https://github.com/microsoft/msrflute) - a platform for conducting high-performance federated learning simulations.


### Windows
- [Windows Machine Learning](https://github.com/microsoft/Windows-Machine-Learning) - Machine Learning on Windows.

### Datasets
- [COCO Dataset](https://cocodataset.org/#home) - COCO is a large-scale object detection, segmentation, and captioning dataset.
- [MS MARCO](https://microsoft.github.io/msmarco/) - collection of datasets focused on deep learning in search.
- [InnerEye CreateDataset](https://github.com/microsoft/InnerEye-CreateDataset) - InnerEye dataset creation tool for InnerEye-DeepLearning library. Transforms DICOM data into mask for training Deep Learning models.
- [Sepsis Cohort from MIMIC III](https://github.com/microsoft/mimic_sepsis) - Sepsis cohort from MIMIC dataset.
- [MIND : Microsoft News Dataset](https://msnews.github.io/) - a large-scale dataset for news recommendation research.
- [Dataset for AI for Earth](https://github.com/microsoft/AIforEarthDataSets) - AIForEarthDataSets is a collection of datasets for AI research.
- [ORBIT](https://github.com/microsoft/ORBIT-Dataset) - a collection of videos of objects in clean and cluttered scenes recorded by people who are blind/low-vision on a mobile phone. 
- [EcoFlows](https://github.com/microsoft/Ecoflow) - Community-representation to collaborate on labelled AI data for ecological and agricultural scenarios in APAC, updated monthly.


### Debug & Benchmark
- [tensorwatch](https://github.com/microsoft/tensorwatch) - debugging, monitoring and visualization for python machine learning and data science.
- [PYRIGHT](https://github.com/microsoft/pyright) - static type checker for python.
- [Bench ML](https://github.com/microsoft/benchml) - Python library to benchmark popular pre-built cloud AI APIs.
- [debugpy](https://github.com/microsoft/debugpy) - An implementation of the Debug Adapter Protocol for Python
- [kineto](https://github.com/pytorch/kineto) - A CPU+GPU Profiling library that provides access to timeline traces and hardware performance counters contributed by Azure AI Platform team.
- [SuperBenchmark](https://github.com/microsoft/superbenchmark) - a benchmarking and diagnosis tool for AI infrastructure (software & hardware).
- [tempeh](https://github.com/microsoft/tempeh) - tempeh is a framework to TEst Machine learning PErformance exHaustively which includes tracking memory usage and run time.



### Pipeline
- [GitHub Actions](https://github.com/features/actions) - Automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub.
- [Azure Pipelines](https://azure.microsoft.com/en-us/services/devops/pipelines/) - Automate your builds and deployments with Pipelines so you spend less time with the nuts and bolts and more time being creative.
- [Dagli](https://github.com/linkedin/dagli) - framework for defining machine learning models, including feature generation and transformations as DAG.

### Platform
- [AI for Earth API Platform](https://github.com/microsoft/AIforEarth-API-Platform) - distributed infrastructure designed to provide a secure, scalable, and customizable API hosting, designed to handle the needs of long-running/asynchronous machine learning model inference.

- [Open Platfom for AI (OpenPAI)](https://github.com/Microsoft/pai) - resource scheduling and cluster management for AI.
    - [OpenPAI Runtime](https://github.com/microsoft/openpai-runtime) - Runtime for deep learning workload.
    - [OpenPAI Protocol](https://github.com/microsoft/openpai-protocol) - OpenPAI protocol enables job sharing and portability.
    - [Openpaimarketplace](https://github.com/microsoft/openpaimarketplace) - A marketplace which stores examples and job templates of openpai. 
    - [OpenPAI FrameworkController](https://github.com/microsoft/frameworkcontroller) - built to orchestrate all kinds of applications on Kubernetes by a single controller.
    - [HivedDScheduler](https://github.com/microsoft/hivedscheduler) - Kubernetes Scheduler for Deep Learning.
    - [OpenPAI JS SDK](https://github.com/microsoft/openpaisdk) - The JavaScript SDK is designed to facilitate the developers of OpenPAI to offer user friendly experience.
    - [OpenPAI VS Code Client](https://github.com/microsoft/openpaivscode) - Extension to connect OpenPAI clusters, submit AI jobs, simulate jobs locally, manage files, and so on.

- [MLOS](https://github.com/microsoft/MLOS) - Data Science powered infrastructure and methodology to democratize and automate Performance Engineering. 
- [Platform for Situated Intelligence](https://github.com/Microsoft/psi) - an open-source framework for multimodal, integrative AI.
- [Qlib](https://github.com/microsoft/qlib) - an AI-oriented quantitative investment platform.

### Feature Engineering
- [Feast on Azure](https://github.com/Azure/feast-azure) - Azure plugins for Feast (FEAture STore).
- [Feathr](https://github.com/linkedin/feathr) - An Enterprise-Grade, High Performance Feature Store.

### Tagging
- [TagAnomaly](https://github.com/microsoft/TagAnomaly) - Anomaly detection analysis and labeling tool, specifically for multiple time series (one time series per category)
- [VoTT](https://github.com/microsoft/VoTT) - Visual object tagging tool
- [Satellite imagery annotation tool](https://github.com/microsoft/satellite-imagery-labeling-tool) - A lightweight web-interface for creating and sharing vector annotations over satellite/aerial imagery scenes.

### Developer tool
- [Visual Studio Code](https://github.com/microsoft/vscode) -  Code editor redefined and optimized for building and debugging modern web and cloud applications.
- [Gather](https://marketplace.visualstudio.com/items?itemName=ms-python.gather) - adds gather functionality in the Python language to the Jupyter Extension.
- [Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylances) - an extension that works alongside Python in Visual Studio Code to provide performant language support.
- [Azure ML Snippets](https://github.com/Azure/azureml-snippets) - VSCode snippets for Azure Machine Learning

### Sample Code
- [Microsoft AI for Earth](https://www.microsoft.com/en-us/ai/ai-for-earth-tech-resources)
    - [Shared utilities](https://github.com/microsoft/ai4eutils) - A collection of utilities for working with Azure Machine Learning.
    - [acoustic-bird-detection](https://github.com/microsoft/acoustic-bird-detection) - Tutorial: Accurate Bioacoustic Species Detection from Small Numbers of Training Clips Using the Biophony Model
    - [beluasound](https://github.com/microsoft/belugasounds) - Using machine learning to detect beluga whale calls in hydrophone recordings.
    - [arcticseals](https://github.com/microsoft/arcticseals) - detect & classify arctic seals in aerial imagery to understand how they’re adapting to a changing world.
    - [AIDE: Annotation Interface for Data-driven Ecology](https://github.com/microsoft/aerial_wildlife_detection) - Detecting and classifying wildlife in aerial imagery.
    - [Camera Trap Tool](https://github.com/microsoft/CameraTraps) - tools for training and running detectors and classifiers for wildlife images collected from motion-triggered cameras.
    - [Land cover mapping the Orinoquía region](https://github.com/microsoft/landcover-orinoquia) - A tool for predicting landcover in the Orinoquia region of Peru.
    - [Planetary Computer Hub](https://github.com/microsoft/PlanetaryComputerExamples) - a development environment that makes our data and APIs accessible through familiar, open-source tools, and allows users to easily scale their analyses.
    - [Poultry barn mapping](https://github.com/microsoft/poultry-cafos) - code for detecting poultry barns from high-resolution aerial imagery and an accompanying dataset of predicted barns over the United States.
    - [Planetary Computer SDK for Python](https://github.com/microsoft/planetary-computer-sdk-for-python) - A Python SDK for the Planetary Computer Hub.
    - [Species Classification](https://github.com/microsoft/SpeciesClassification) - A tool for classifying species in images.
    - [FarmVibes.AI](https://github.com/microsoft/farmvibes-ai) - Multi-Modal GeoSpatial ML Models for Agriculture and Sustainability.
- [News Threads](https://github.com/microsoft/News-Threads) - The News Threads project analyzes news articles to help find similarities between news articles and trace news provenance across time.
- [InnerEye DeepLearning](https://github.com/microsoft/InnerEye-DeepLearning) - Medical Imaging Deep Learning library to train and deploy models on Azure Machine Learning and Azure Stack
- [Deep Seismic](https://github.com/microsoft/seismic-deeplearning) - Deep Learning for Seismic Imaging and Interpretation
- [Multi-species bioacoustic classification](https://github.com/microsoft/Multi_Species_Bioacoustic_Classification) - Multi-species bioacoustic classification using deep learning algorithms.
- [Nestle Acne Assessment](https://github.com/microsoft/nestle-acne-assessment) - deep learning models to assess the acne severity level based on selfie images.
- [Visual Analogies](https://github.com/microsoft/art) - exploring the connections between artworks with deep "Visual Analogies".

- [Forecasting Best Practices](https://github.com/microsoft/forecasting) - time series forecasting best practices & examples.

- [Computer Vision Recipes](https://github.com/microsoft/computervision-recipes) - best practices, code samples, and documentation for Computer Vision.

- [DeepSpeed Examples](https://github.com/microsoft/DeepSpeedExamples) - Example models using DeepSpeed

- [A TALE OF THREE CITIES](https://github.com/microsoft/A-TALE-OF-THREE-CITIES) - Analyzing the safety (311) dataset published by Azure Open Datasets for Chicago, Boston and New York City using SparkR, SParkSQL, Azure Databricks, visualization using ggplot2 and leaflet.

- [Microsoft Health Intelligence Machine Learning Toolbox](https://github.com/microsoft/hi-ml) - Microsoft Health Intelligence Azure Machine Learning Toolbox.

- [Azure Machine Learning examples](https://github.com/Azure/azureml-examples) - official community-driven Azure Machine Learning examples, tested with GitHub Actions.

- [Azure Machine Learning R Template](https://github.com/microsoft/AzureML-R-template) - patterns and examples for running R code with Azure Machine Learning.

- [Azure Machine Learning Python SDK notebooks](https://github.com/Azure/MachineLearningNotebooks) - python notebooks with ML and deep learning examples with Azure Machine Learning Python SDK.

- [Azure Machine Learning Gallery](https://github.com/Azure/AzureMachineLearningGallery)  - this repo enables our growing community of developers and data scientists to share their machine learning pipelines, components, etc. to accelerate productivity in the machine learning lifecycle.

- [Azure Machine Learning previews](https://github.com/Azure/azureml-previews) - samples for preview features in Azure Machine Learning.

- [AzureML Designer Sample](https://github.com/Azure/MachineLearningDesigner) - samples of Azure Machine Learning designer.
- [Ship Detector](https://github.com/microsoft/ShipDetection) - train an object detection model that can detect and locate ships in a satellite image.

- Microsoft Solution Accelerators
    - [MLOps Solution Accelerator](https://github.com/microsoft/dstoolkit-mlops-base) - this repository helps ML teams to accelerate their model deployment to production leveraging Azure.
    - [Anomaly Detection Solution Accelerator](https://github.com/microsoft/dstoolkit-anomaly-detection-ijungle) -  implement Anomaly Detection which is the technique of identifying rare events or observations which can raise suspicions by being statistically different from the rest of the observations.
    - [Classification Solution Accelerator](https://github.com/microsoft/dstoolkit-classification-solution-accelerator) - This is a classification solution accelerator to help you build and deploy a binary classification project.

- [Medical Imaging with Azure Machine Learning Demos](https://github.com/Azure/medical-imaging) - medical imaging demo repository.

- [Federated Learning in Azure ML](https://github.com/Azure-Samples/azure-ml-federated-learning) - Examples and recipes around federated learning in Azure ML.

- [Responsible AI Workshop](https://github.com/microsoft/responsible-ai-workshop) - Responsible AI Workshop: a series of tutorials & walkthroughs to illustrate how put responsible AI into practice.

- [GlobalMLBuildingFootprints](https://github.com/microsoft/GlobalMLBuildingFootprints) - Worldwide building footprints derived from satellite imagery.
- [Genomics Data Analysis with Jupyter Notebooks on Azure](https://github.com/microsoft/genomicsnotebook) - Jupyter Notebooks on Azure for Genomics Data Analysis.


### Community
- [AI@Edge Community](https://microsoft.github.io/ai-at-edge/) - find the resources you need to create solutions using intelligence at the edge through combinations of hardware, machine learning (ML), artificial intelligence (AI) and Microsoft Azure service.
- [Global AI Community](https://globalai.community/) -  empowers developers who are passionate about AI to share knowledge through events and meetups. 
- [Deep Learning Lab (Japan)](https://dllab.connpass.com/) - provides information on development cases and the latest technology trends related to deep learning.

### Workshop

- [Workshop Wiki](https://github.com/microsoft/machine-learning-collection/wiki/Workshop)


### Competition
- [2020 Machine Learning Security Evasion Competition](https://github.com/Azure/2020-machine-learning-security-evasion-competition) - code samples for the 2020 Machine Learning Security Evasion Competition.

### Book
- [PRML](https://www.microsoft.com/en-us/research/people/cmbishop/prml-book/) - Pattern Recognition and Machine Learning by Christopher Bishop
- [Foundations of Data Science](https://www.cs.cornell.edu/jeh/book.pdf) - Basic Theory for Data Science.
- [Mastering Azure Machine Learning: Perform large-scale end-to-end advanced machine learning in the cloud with Microsoft Azure Machine Learning](https://www.amazon.com/dp/1789807557/ref=cm_sw_r_tw_dp_SS0HC0EA2GXPK4QHF087) 
- [Practical Automated Machine Learning on Azure: Using Azure Machine Learning to Quickly Build AI Solutions](https://www.amazon.com/dp/149205559X/ref=cm_sw_r_tw_dp_EN0VKVBDE5MZ1VK39K3F) 

## Learning
- [Microsoft Learn](https://docs.microsoft.com/en-us/learn/) - Learning contents for Microsoft technology
    - [Data Scientist](https://docs.microsoft.com/en-us/learn/roles/data-scientist), [AI Engineer](https://docs.microsoft.com/en-us/learn/roles/ai-engineer)
- [Data Science for Manager](https://github.com/microsoft/datascience4managers) - Generalization, Utility, and Experimentation: ML Concepts for Making Better Business Decisions
- [Github Learning Lab](https://lab.github.com/) - learning contents for Github technology.
- [Getting started with Python](https://github.com/microsoft/c9-python-getting-started) - Sample code for Channel 9 Python for Beginners course.
    - [Python for Beginners](https://channel9.msdn.com/Series/Intro-to-Python-Development?WT.mc_id=python-c9-niner)
    - [More Python for Beginners](https://channel9.msdn.com/Series/More-Python-for-Beginners)
    - [Even More Python for Beginners](https://channel9.msdn.com/Series/Even-More-Python-for-Beginners-Data-Tools)
- [Get started with PyTorch](https://docs.microsoft.com/en-US/learn/paths/pytorch-fundamentals/)- learn the fundamentals of deep learning with PyTorch.
- [Dev Intro to Data Science](https://channel9.msdn.com/Series/Dev-Intro-to-Data-Science) - In this 28-video series, you will learn important concepts and technologies to build your end-to-end machine learning applications on Azure.
- [Machine Learning for Beginners - A Curriculum](https://github.com/microsoft/ML-For-Beginners) - 12 weeks, 24 lessons, classic Machine Learning for all
- [Data Science for Beginners - A Curriculum](https://github.com/microsoft/Data-Science-For-Beginners) - 10 Weeks, 20 Lessons, Data Science for All!
- [Artificial Intelligence for Beginners](https://github.com/microsoft/ai-for-beginners) - 12 Weeks, 24 Lessons, AI for All!
- [Microsoft Cloud Workshop](https://github.com/microsoft/MCW-ML-Ops) - Wide World Importers (WWI) delivers innovative solutions for manufacturers.

## Blog, News & Webinar
- [channel9 - AI Show](https://channel9.msdn.com/Shows/AI-Show) - videos for developers from people building Microsoft products and services.
- [Microsoft Open Source Blog](https://cloudblogs.microsoft.com/opensource/) - blog about microsoft open source technology.
- [Microsoft Research Event, Conference & Webinars](https://www.microsoft.com/en-us/research/webinar/) - Events, Conferences & Webinars by Microsoft Research.
- [Microsoft Innovation Tech Hub](https://innovation.microsoft.com/en-us/developer) - AI project in Microsoft.
- [LinkedIn Engineering Blog](https://engineering.linkedin.com/blog) - Blog by LinkedIn Engineering Team    
- [AI System](https://github.com/microsoft/AI-System) - system for AI Education Resource (Chinese).
- [AI Edu](https://github.com/microsoft/ai-edu) - AI education materials for Chinese students, teachers and IT professionals (Chinese).

<br>
---


## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft 
trademarks or logos is subject to and must follow 
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
