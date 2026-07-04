---
Module: 1
Lesson: 5
Title: AI Applications
---

# Quiz: AI Applications

## Multiple Choice (5 questions)

**1. Which AI architecture is most commonly used for Computer Vision tasks?**

a) Transformer
b) Convolutional Neural Network (CNN)
c) Recurrent Neural Network (RNN)
d) Decision Tree

**2. What is collaborative filtering in recommendation systems?**

a) Recommending items with similar features to past preferences
b) Recommending items based on what similar users liked
c) Filtering out low-quality items collaboratively
d) Using human experts to curate recommendations

**3. Which of the following is a task in Natural Language Processing?**

a) Image segmentation
b) Object tracking
c) Named Entity Recognition
d) Path planning

**4. What technology powers modern image generation systems like DALL-E and Stable Diffusion?**

a) Recurrent Neural Networks
b) Diffusion Models
c) Support Vector Machines
d) Decision Trees

**5. Which problem occurs when a recommendation system encounters a new user with no history?**

a) Overfitting problem
b) Cold start problem
c) Vanishing gradient problem
d) Black swan problem

## Short Answer (2 questions)

**6. Explain the difference between object detection and image classification.**

**7. Give one real-world example of Generative AI in a SaaS product. What does it generate and how is it used?**

## Coding Question (1 question)

**8.** Write a Python function `identify_application(task_description)` that takes a task description and returns which AI application area it belongs to ('computer_vision', 'nlp', 'robotics', 'recommendation', 'generative'). Use keyword matching.

---

## Answer Key

1. **b)** Convolutional Neural Network (CNN)
2. **b)** Recommending items based on what similar users liked
3. **c)** Named Entity Recognition
4. **b)** Diffusion Models
5. **b)** Cold start problem
6. Image classification assigns a single label to the entire image ("this is a cat"). Object detection identifies and locates multiple objects in an image with bounding boxes ("there is a cat at position (10, 20, 100, 150) and a dog at (200, 50, 300, 200)").
7. Example: GitHub Copilot generates code as the developer types. It uses Generative AI (LLM) to suggest completions, function implementations, and even entire functions based on context and comments.
8. 
```python
def identify_application(task_description):
    desc = task_description.lower()
    
    if any(kw in desc for kw in ['image', 'video', 'face', 'object', 'detect', 'recognize', 'camera']):
        return 'computer_vision'
    elif any(kw in desc for kw in ['text', 'language', 'translate', 'speech', 'word', 'sentence', 'document']):
        return 'nlp'
    elif any(kw in desc for kw in ['robot', 'navigate', 'grasp', 'move', 'autonomous', 'drone']):
        return 'robotics'
    elif any(kw in desc for kw in ['recommend', 'suggest', 'personalize', 'preference']):
        return 'recommendation'
    elif any(kw in desc for kw in ['generate', 'create', 'write', 'compose', 'design', 'paint']):
        return 'generative'
    else:
        return 'unknown'
```
