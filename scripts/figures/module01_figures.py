#!/usr/bin/env python3
"""Generate 17 conceptual figures for Module 1: Introduction to AI."""

import matplotlib
matplotlib.use('Agg')
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from pathlib import Path

FIGS_DIR = Path(__file__).resolve().parent.parent.parent / "figures" / "module01"
FIGS_DIR.mkdir(parents=True, exist_ok=True)


def figure1_1_ai_dimensions():
    fig, ax = plt.subplots(figsize=(8, 5))
    ax.axis("off")
    categories = [
        ("", "Humanly", "Rationally"),
        ("Thinking", "Cognitive\nScience", "Laws of\nThought"),
        ("Acting", "Turing\nTest", "Rational\nAgent"),
    ]
    colors = [["white", "lightgray", "lightgray"], ["lightgray", "#E8D5F5", "#D5E8D5"],
              ["lightgray", "#F5E8D5", "#C8E6C9"]]
    for i, row in enumerate(categories):
        for j, cell in enumerate(row):
            rect = plt.Rectangle((j, 2 - i), 1, 1, facecolor=colors[i][j], edgecolor="black", lw=1.5)
            ax.add_patch(rect)
            if i == 0 and j == 0:
                continue
            ax.text(j + 0.5, 2 - i + 0.5, cell, ha="center", va="center", fontsize=11, fontweight="bold")
    ax.text(0.5, 3.2, "The Four Goals of AI (Russell & Norvig)", ha="center", fontsize=13, fontweight="bold")
    ax.set_xlim(0, 2)
    ax.set_ylim(0, 3)
    ax.plot([1, 1], [0, 2], color="black", lw=1.5)
    ax.plot([0, 2], [2, 2], color="black", lw=1.5)
    # Highlight rational agent
    rect = plt.Rectangle((1, 0), 1, 1, facecolor="#C8E6C9", edgecolor="green", lw=3)
    ax.add_patch(rect)
    ax.text(1.5, 0.5, "Rational\nAgent", ha="center", va="center", fontsize=11, fontweight="bold", color="darkgreen")
    ax.text(2.1, 0.5, "← This course", fontsize=10, color="green", va="center")
    fig.savefig(FIGS_DIR / "figure1_1_ai_dimensions.png", dpi=150, bbox_inches="tight")
    fig.savefig(FIGS_DIR / "figure1_1_ai_dimensions.svg", dpi=150, bbox_inches="tight")
    plt.close(fig)


def figure1_2_agent_environment():
    fig, ax = plt.subplots(figsize=(8, 4))
    ax.axis("off")
    # Environment box
    env = plt.Rectangle((0.05, 0.15), 0.35, 0.7, facecolor="#E3F2FD", edgecolor="#1565C0", lw=2)
    ax.add_patch(env)
    ax.text(0.225, 0.5, "Environment", ha="center", va="center", fontsize=14, fontweight="bold", color="#1565C0")
    # Agent box
    agent = plt.Rectangle((0.6, 0.15), 0.35, 0.7, facecolor="#FFF3E0", edgecolor="#E65100", lw=2)
    ax.add_patch(agent)
    ax.text(0.775, 0.5, "Agent", ha="center", va="center", fontsize=14, fontweight="bold", color="#E65100")
    # Sensors arrow (env -> agent)
    ax.annotate("", xy=(0.58, 0.6), xytext=(0.42, 0.6),
                arrowprops=dict(arrowstyle="->", color="green", lw=2))
    ax.text(0.5, 0.65, "Sensors", ha="center", fontsize=10, color="green")
    # Actuators arrow (agent -> env)
    ax.annotate("", xy=(0.42, 0.35), xytext=(0.58, 0.35),
                arrowprops=dict(arrowstyle="->", color="red", lw=2))
    ax.text(0.5, 0.25, "Actuators", ha="center", fontsize=10, color="red")
    # Percepts and Actions labels
    ax.text(0.5, 0.82, "Percepts", ha="center", fontsize=9, color="green", fontstyle="italic")
    ax.text(0.5, 0.12, "Actions", ha="center", fontsize=9, color="red", fontstyle="italic")
    fig.savefig(FIGS_DIR / "figure1_2_agent_environment.png", dpi=150, bbox_inches="tight")
    fig.savefig(FIGS_DIR / "figure1_2_agent_environment.svg", dpi=150, bbox_inches="tight")
    plt.close(fig)


def figure2_1_ai_timeline():
    milestones = [
        ("1950", "Turing Test"),
        ("1956", "Dartmouth\nWorkshop"),
        ("1966", "ELIZA\nChatbot"),
        ("1980s", "Expert\nSystems"),
        ("1997", "Deep Blue\nbeats Kasparov"),
        ("2012", "AlexNet\nDeep Learning"),
        ("2020", "GPT-3\nLLMs"),
        ("2023+", "Multimodal\nAI"),
    ]
    fig, ax = plt.subplots(figsize=(12, 4))
    ax.axis("off")
    y_pos = 0.5
    for i, (year, event) in enumerate(milestones):
        x = i / (len(milestones) - 1)
        color = "#1E88E5" if i < 4 else "#E53935" if i < 6 else "#43A047"
        ax.plot(x, y_pos, "o", markersize=12, color=color, zorder=3)
        ax.vlines(x, y_pos - 0.05, y_pos + 0.05, color=color, lw=2)
        ax.text(x, y_pos - 0.08, year, ha="center", va="top", fontsize=9, color=color, fontweight="bold")
        ax.text(x, y_pos + 0.08, event, ha="center", va="bottom", fontsize=8, color="darkslategray")
    ax.plot([milestones[0][0], milestones[-1][0]], [y_pos, y_pos], color="gray", lw=2, zorder=1)
    # Convert x-axis to numeric for line
    xs = [i / (len(milestones) - 1) for i in range(len(milestones))]
    ax.plot(xs, [y_pos] * len(xs), color="gray", lw=2, zorder=1)
    ax.set_xlim(-0.05, 1.05)
    ax.set_ylim(0, 1)
    ax.set_title("Timeline of Artificial Intelligence", fontsize=14, fontweight="bold", pad=10)
    # Legend
    patches = [
        mpatches.Patch(color="#1E88E5", label="Early AI"),
        mpatches.Patch(color="#E53935", label="AI Renaissance"),
        mpatches.Patch(color="#43A047", label="Modern AI"),
    ]
    ax.legend(handles=patches, loc="lower center", bbox_to_anchor=(0.5, -0.25), ncol=3, fontsize=9)
    fig.savefig(FIGS_DIR / "figure2_1_ai_timeline.png", dpi=150, bbox_inches="tight")
    fig.savefig(FIGS_DIR / "figure2_1_ai_timeline.svg", dpi=150, bbox_inches="tight")
    plt.close(fig)


def figure2_2_ai_hype_cycle():
    fig, ax = plt.subplots(figsize=(10, 5))
    x = np.linspace(0, 10, 200)
    y = 2 * np.sin(x - 2) * np.exp(-0.15 * x) + np.exp(-0.05 * x) * 0.5 + 0.5
    ax.plot(x, y, "b-", lw=2.5)
    ax.axhline(y=0.5, color="gray", ls="--", alpha=0.5)
    labels = [
        (1.2, 1.8, "Peak of\nInflated\nExpectations"),
        (3.5, 0.8, "Trough of\nDisillusionment"),
        (6.0, 1.0, "Slope of\nEnlightenment"),
        (8.5, 1.3, "Plateau of\nProductivity"),
    ]
    for x_pos, y_pos, text in labels:
        ax.plot(x_pos, y_pos, "ro", markersize=6)
        ax.annotate(text, (x_pos, y_pos), textcoords="offset points", xytext=(0, 20),
                    ha="center", fontsize=8, color="darkred")
    ax.set_xlim(0, 10)
    ax.set_ylim(0, 2.2)
    ax.set_xlabel("Time / Maturity", fontsize=11)
    ax.set_ylabel("Expectations / Hype", fontsize=11)
    ax.set_title("Gartner Hype Cycle for AI", fontsize=13, fontweight="bold")
    ax.grid(True, alpha=0.3)
    fig.savefig(FIGS_DIR / "figure2_2_ai_hype_cycle.png", dpi=150, bbox_inches="tight")
    fig.savefig(FIGS_DIR / "figure2_2_ai_hype_cycle.svg", dpi=150, bbox_inches="tight")
    plt.close(fig)


def figure3_1_ai_capability_pyramid():
    fig, ax = plt.subplots(figsize=(8, 6))
    ax.axis("off")
    levels = [
        (0.5, "AGI / ASI", "Artificial General\nIntelligence", "#E53935", 0.15),
        (1.5, "Deep Learning", "Neural networks\nwith many layers", "#FB8C00", 0.35),
        (2.5, "Machine Learning", "Algorithms that\nlearn from data", "#43A047", 0.55),
        (3.5, "AI", "Intelligent agents\nand systems", "#1E88E5", 0.75),
    ]
    for y_pos, title, desc, color, width in levels:
        x_center = 0.5
        half = width / 2
        rect = plt.Rectangle((x_center - half, y_pos - 0.35), width, 0.7, facecolor=color, edgecolor="white", lw=2, alpha=0.85)
        ax.add_patch(rect)
        ax.text(x_center, y_pos + 0.12, title, ha="center", va="center", fontsize=12, fontweight="bold", color="white")
        ax.text(x_center, y_pos - 0.18, desc, ha="center", va="center", fontsize=8, color="white", alpha=0.9)
    for i in range(1, len(levels)):
        y = levels[i][0] - 0.35
        prev_w = levels[i - 1][4]
        cur_w = levels[i][4]
        ax.plot([0.5 - prev_w / 2, 0.5 - cur_w / 2], [levels[i - 1][0] + 0.35, y], color="gray", lw=1)
        ax.plot([0.5 + prev_w / 2, 0.5 + cur_w / 2], [levels[i - 1][0] + 0.35, y], color="gray", lw=1)
    ax.set_xlim(0, 1)
    ax.set_ylim(-0.2, 4.2)
    ax.set_title("The AI Capability Pyramid", fontsize=14, fontweight="bold")
    fig.savefig(FIGS_DIR / "figure3_1_ai_capability_pyramid.png", dpi=150, bbox_inches="tight")
    fig.savefig(FIGS_DIR / "figure3_1_ai_capability_pyramid.svg", dpi=150, bbox_inches="tight")
    plt.close(fig)


def figure3_2_types_of_ai():
    fig, ax = plt.subplots(figsize=(8, 6))
    ax.axis("off")
    types = [
        ("Reactive\nMachines", "No memory.\nReact to current\ninput only.", "#1E88E5", 0, 3),
        ("Limited\nMemory", "Uses past data\nto inform\ndecisions.", "#43A047", 1, 3),
        ("Theory of\nMind", "Understands\nothers' beliefs\nand intentions.", "#FB8C00", 2, 3),
        ("Self-Aware", "Has consciousness\nand self-\nawareness.", "#E53935", 3, 3),
    ]
    for title, desc, color, col, ncols in types:
        x = col / ncols + 0.5 / ncols - 0.08
        rect = plt.Rectangle((col * 0.22 + 0.05, 0.15), 0.2, 0.6, facecolor=color, edgecolor="white", lw=2, alpha=0.85)
        ax.add_patch(rect)
        ax.text(col * 0.22 + 0.15, 0.55, title, ha="center", va="center", fontsize=10, fontweight="bold", color="white")
        ax.text(col * 0.22 + 0.15, 0.35, desc, ha="center", va="center", fontsize=7, color="white", alpha=0.9)
    ax.text(0.5, 0.9, "Types of AI by Functionality", ha="center", fontsize=13, fontweight="bold")
    ax.text(0.5, 0.03, "→ Today's AI\n→ Future AI", ha="center", fontsize=9, color="gray", fontstyle="italic")
    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    fig.savefig(FIGS_DIR / "figure3_2_types_of_ai.png", dpi=150, bbox_inches="tight")
    fig.savefig(FIGS_DIR / "figure3_2_types_of_ai.svg", dpi=150, bbox_inches="tight")
    plt.close(fig)


def figure4_1_paradigm_comparison():
    fig, ax = plt.subplots(figsize=(10, 5))
    ax.axis("off")
    paradigms = [
        ("Expert\nSystems", "Rule-based\nif-then logic", "#5C6BC0", 0),
        ("Machine\nLearning", "Learn patterns\nfrom data", "#26A69A", 1),
        ("Deep\nLearning", "Multi-layer\nneural networks", "#EF5350", 2),
        ("Large Language\nModels", "Transformer-based\ntext models", "#FFA726", 3),
    ]
    for title, desc, color, i in paradigms:
        x = i * 0.23 + 0.08
        rect = plt.Rectangle((x, 0.15), 0.2, 0.6, facecolor=color, edgecolor="white", lw=2, alpha=0.85)
        ax.add_patch(rect)
        ax.text(x + 0.1, 0.55, title, ha="center", va="center", fontsize=9, fontweight="bold", color="white")
        ax.text(x + 0.1, 0.35, desc, ha="center", va="center", fontsize=7, color="white", alpha=0.9)
        # Arrow between them
        if i < 3:
            ax.annotate("", xy=(x + 0.2 + 0.015, 0.45), xytext=(x + 0.2 - 0.015, 0.45),
                        arrowprops=dict(arrowstyle="->", color="gray", lw=1.5))
    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.text(0.5, 0.92, "AI Paradigms: Evolution of Approaches", ha="center", fontsize=13, fontweight="bold")
    ax.text(0.5, 0.02, "Increasing complexity and data requirements →", ha="center", fontsize=9, color="gray")
    fig.savefig(FIGS_DIR / "figure4_1_paradigm_comparison.png", dpi=150, bbox_inches="tight")
    fig.savefig(FIGS_DIR / "figure4_1_paradigm_comparison.svg", dpi=150, bbox_inches="tight")
    plt.close(fig)


def figure4_2_neural_network():
    fig, ax = plt.subplots(figsize=(8, 6))
    ax.axis("off")
    np.random.seed(42)
    layer_sizes = [4, 5, 3]
    layer_names = ["Input Layer", "Hidden Layer", "Output Layer"]
    colors = ["#1E88E5", "#43A047", "#E53935"]
    x_spacing = 1.5
    y_spacing = 0.4
    x_positions = [-x_spacing, 0, x_spacing]
    nodes = []
    for layer_idx, (n_nodes, name, color) in enumerate(zip(layer_sizes, layer_names, colors)):
        y_start = -(n_nodes - 1) * y_spacing / 2
        layer_nodes = []
        for i in range(n_nodes):
            y = y_start + i * y_spacing
            circle = plt.Circle((x_positions[layer_idx], y), 0.12, facecolor=color, edgecolor="white", lw=2, alpha=0.85)
            ax.add_patch(circle)
            layer_nodes.append((x_positions[layer_idx], y))
        nodes.append(layer_nodes)
        ax.text(x_positions[layer_idx], y_start - 0.3, name, ha="center", fontsize=9, fontweight="bold", color=color)
    # Connections between layers
    for i in range(len(nodes) - 1):
        for (x1, y1) in nodes[i]:
            for (x2, y2) in nodes[i + 1]:
                ax.plot([x1, x2], [y1, y2], color="gray", lw=0.3, alpha=0.3)
    ax.text(0, 0.75, "Simple Neural Network Architecture", ha="center", fontsize=13, fontweight="bold")
    ax.set_xlim(-2.2, 2.2)
    ax.set_ylim(-1.2, 1.2)
    fig.savefig(FIGS_DIR / "figure4_2_neural_network.png", dpi=150, bbox_inches="tight")
    fig.savefig(FIGS_DIR / "figure4_2_neural_network.svg", dpi=150, bbox_inches="tight")
    plt.close(fig)


def figure4_3_ml_workflow():
    fig, ax = plt.subplots(figsize=(10, 2.5))
    ax.axis("off")
    steps = [
        "Data\nCollection",
        "Data\nCleaning",
        "Feature\nEngineering",
        "Model\nTraining",
        "Model\nEvaluation",
        "Model\nDeployment",
    ]
    colors = ["#1E88E5", "#43A047", "#FB8C00", "#E53935", "#8E24AA", "#00ACC1"]
    for i, (step, color) in enumerate(zip(steps, colors)):
        x = i * 0.16 + 0.04
        rect = plt.Rectangle((x, 0.1), 0.14, 0.7, facecolor=color, edgecolor="white", lw=2, alpha=0.85)
        ax.add_patch(rect)
        ax.text(x + 0.07, 0.45, step, ha="center", va="center", fontsize=8, fontweight="bold", color="white")
        if i < len(steps) - 1:
            ax.annotate("", xy=(x + 0.14 + 0.01, 0.45), xytext=(x + 0.14 - 0.01, 0.45),
                        arrowprops=dict(arrowstyle="->", color="gray", lw=2))
    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.text(0.5, 0.93, "The Machine Learning Workflow", ha="center", fontsize=13, fontweight="bold")
    fig.savefig(FIGS_DIR / "figure4_3_ml_workflow.png", dpi=150, bbox_inches="tight")
    fig.savefig(FIGS_DIR / "figure4_3_ml_workflow.svg", dpi=150, bbox_inches="tight")
    plt.close(fig)


def figure5_1_applications_mindmap():
    fig, ax = plt.subplots(figsize=(10, 7))
    ax.axis("off")
    center = (0.5, 0.5)
    ax.text(center[0], center[1], "AI\nApplications", ha="center", va="center", fontsize=14, fontweight="bold",
            bbox=dict(boxstyle="circle", facecolor="#1E88E5", edgecolor="white", alpha=0.85))
    branches = [
        ("Healthcare", 0.3, 0.8, "#E53935", ["Diagnosis", "Drug Discovery", "Personalized Medicine"]),
        ("Finance", 0.8, 0.8, "#43A047", ["Fraud Detection", "Algorithmic Trading", "Risk Assessment"]),
        ("Transportation", 0.85, 0.3, "#FB8C00", ["Self-driving Cars", "Route Optimization", "Traffic Prediction"]),
        ("Biotechnology", 0.2, 0.3, "#8E24AA", ["Genomics", "Protein Folding", "Clinical Trials"]),
        ("SaaS", 0.5, 0.12, "#00ACC1", ["Churn Prediction", "Recommendation", "Customer Segmentation"]),
        ("Education", 0.15, 0.6, "#5C6BC0", ["Adaptive Learning", "Grading", "Tutoring Systems"]),
    ]
    for name, x, y, color, items in branches:
        ax.plot([center[0], x], [center[1], y], color="gray", lw=1, alpha=0.5)
        ax.text(x, y, name, ha="center", va="center", fontsize=10, fontweight="bold", color="white",
                bbox=dict(boxstyle="round,pad=0.3", facecolor=color, edgecolor="white", alpha=0.85))
        for j, item in enumerate(items):
            offset = 0.035
            item_x = x + (center[0] - x) * 0.35
            item_y = y + (center[1] - y) * 0.35 + (j - 1) * 0.035
            ax.text(item_x, item_y, f"• {item}", ha="center", va="center", fontsize=7, color="dimgray")
    fig.savefig(FIGS_DIR / "figure5_1_applications_mindmap.png", dpi=150, bbox_inches="tight")
    fig.savefig(FIGS_DIR / "figure5_1_applications_mindmap.svg", dpi=150, bbox_inches="tight")
    plt.close(fig)


def figure5_2_recommendation_systems():
    fig, ax = plt.subplots(figsize=(8, 5))
    ax.axis("off")
    approaches = [
        ("Content-Based\nFiltering", "Recommends items\nsimilar to what\nthe user liked before", "#1E88E5", 0),
        ("Collaborative\nFiltering", "Recommends items\nliked by similar\nusers", "#43A047", 1),
        ("Hybrid\nApproach", "Combines both\nmethods for\nbetter results", "#E53935", 2),
    ]
    for title, desc, color, i in approaches:
        x = i * 0.3 + 0.08
        rect = plt.Rectangle((x, 0.15), 0.27, 0.6, facecolor=color, edgecolor="white", lw=2, alpha=0.85)
        ax.add_patch(rect)
        ax.text(x + 0.135, 0.55, title, ha="center", va="center", fontsize=10, fontweight="bold", color="white")
        ax.text(x + 0.135, 0.35, desc, ha="center", va="center", fontsize=8, color="white", alpha=0.9)
    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.text(0.5, 0.9, "Recommendation System Approaches", ha="center", fontsize=13, fontweight="bold")
    fig.savefig(FIGS_DIR / "figure5_2_recommendation_systems.png", dpi=150, bbox_inches="tight")
    fig.savefig(FIGS_DIR / "figure5_2_recommendation_systems.svg", dpi=150, bbox_inches="tight")
    plt.close(fig)


def figure6_1_drug_discovery():
    fig, ax = plt.subplots(figsize=(10, 2.5))
    ax.axis("off")
    steps = [
        "Target\nIdentification",
        "Hit\nDiscovery",
        "Lead\nOptimization",
        "Preclinical\nTesting",
        "Clinical\nTrials",
        "FDA\nApproval",
    ]
    ai_labels = ["AI: \nGenomics\nAnalysis", "AI: \nVirtual\nScreening", "AI: \nMolecular\nDynamics", "AI: \nToxicity\nPrediction", "AI: \nPatient\nStratification", ""]
    colors = ["#1E88E5", "#43A047", "#FB8C00", "#E53935", "#8E24AA", "#00ACC1"]
    for i, (step, color, ai) in enumerate(zip(steps, colors, ai_labels)):
        x = i * 0.16 + 0.04
        rect = plt.Rectangle((x, 0.25), 0.14, 0.55, facecolor=color, edgecolor="white", lw=2, alpha=0.85)
        ax.add_patch(rect)
        ax.text(x + 0.07, 0.52, step, ha="center", va="center", fontsize=7, fontweight="bold", color="white")
        if ai:
            ax.text(x + 0.07, 0.12, ai, ha="center", va="center", fontsize=6, color=color, fontstyle="italic")
        if i < len(steps) - 1:
            ax.annotate("", xy=(x + 0.14 + 0.01, 0.52), xytext=(x + 0.14 - 0.01, 0.52),
                        arrowprops=dict(arrowstyle="->", color="gray", lw=1.5))
    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.text(0.5, 0.93, "AI in the Drug Discovery Pipeline", ha="center", fontsize=13, fontweight="bold")
    fig.savefig(FIGS_DIR / "figure6_1_drug_discovery.png", dpi=150, bbox_inches="tight")
    fig.savefig(FIGS_DIR / "figure6_1_drug_discovery.svg", dpi=150, bbox_inches="tight")
    plt.close(fig)


def figure6_2_alphafold():
    fig, ax = plt.subplots(figsize=(8, 5))
    ax.axis("off")
    # Input
    rect = plt.Rectangle((0.05, 0.55), 0.25, 0.3, facecolor="#1E88E5", edgecolor="white", lw=2, alpha=0.85)
    ax.add_patch(rect)
    ax.text(0.175, 0.7, "Amino Acid\nSequence\n(Input)", ha="center", va="center", fontsize=9, fontweight="bold", color="white")
    # Model
    rect2 = plt.Rectangle((0.38, 0.55), 0.25, 0.3, facecolor="#E53935", edgecolor="white", lw=2, alpha=0.85)
    ax.add_patch(rect2)
    ax.text(0.505, 0.7, "AlphaFold\nNeural\nNetwork", ha="center", va="center", fontsize=9, fontweight="bold", color="white")
    # Output
    rect3 = plt.Rectangle((0.7, 0.55), 0.25, 0.3, facecolor="#43A047", edgecolor="white", lw=2, alpha=0.85)
    ax.add_patch(rect3)
    ax.text(0.825, 0.7, "3D Protein\nStructure\n(Output)", ha="center", va="center", fontsize=9, fontweight="bold", color="white")
    # Arrows
    ax.annotate("", xy=(0.37, 0.7), xytext=(0.31, 0.7), arrowprops=dict(arrowstyle="->", color="gray", lw=2))
    ax.annotate("", xy=(0.69, 0.7), xytext=(0.63, 0.7), arrowprops=dict(arrowstyle="->", color="gray", lw=2))
    # Key concept
    rect4 = plt.Rectangle((0.15, 0.1), 0.7, 0.3, facecolor="#FFF3E0", edgecolor="#E65100", lw=2, alpha=0.85)
    ax.add_patch(rect4)
    ax.text(0.5, 0.25, "Key Innovation: End-to-end learning from sequence\nto structure using attention mechanisms (transformers)", ha="center", va="center", fontsize=9, color="#E65100")
    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.text(0.5, 0.95, "AlphaFold Architecture Concept", ha="center", fontsize=13, fontweight="bold")
    fig.savefig(FIGS_DIR / "figure6_2_alphafold.png", dpi=150, bbox_inches="tight")
    fig.savefig(FIGS_DIR / "figure6_2_alphafold.svg", dpi=150, bbox_inches="tight")
    plt.close(fig)


def figure6_3_medical_imaging():
    fig, ax = plt.subplots(figsize=(10, 3))
    ax.axis("off")
    steps = [
        ("Image\nAcquisition", "#1E88E5", 0),
        ("Preprocessing\n(denoising,\nnormalization)", "#43A047", 1),
        ("AI Model\n(CNN)\nInference", "#E53935", 2),
        ("Classification\n/ Segmentation\nOutput", "#FB8C00", 3),
        ("Clinical\nDecision\nSupport", "#8E24AA", 4),
    ]
    for title, color, i in steps:
        x = i * 0.19 + 0.04
        rect = plt.Rectangle((x, 0.15), 0.17, 0.65, facecolor=color, edgecolor="white", lw=2, alpha=0.85)
        ax.add_patch(rect)
        ax.text(x + 0.085, 0.45, title, ha="center", va="center", fontsize=8, fontweight="bold", color="white")
        if i < len(steps) - 1:
            ax.annotate("", xy=(x + 0.17 + 0.01, 0.45), xytext=(x + 0.17 - 0.01, 0.45),
                        arrowprops=dict(arrowstyle="->", color="gray", lw=2))
    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.text(0.5, 0.92, "AI-Powered Medical Imaging Workflow", ha="center", fontsize=13, fontweight="bold")
    fig.savefig(FIGS_DIR / "figure6_3_medical_imaging.png", dpi=150, bbox_inches="tight")
    fig.savefig(FIGS_DIR / "figure6_3_medical_imaging.svg", dpi=150, bbox_inches="tight")
    plt.close(fig)


def figure7_1_churn_pipeline():
    fig, ax = plt.subplots(figsize=(10, 3))
    ax.axis("off")
    steps = [
        "Customer\nData",
        "Feature\nEngineering",
        "ML Model\n(Random Forest,\nXGBoost)",
        "Churn\nProbability\nScore",
        "Retention\nActions\n(offer, email)",
    ]
    colors = ["#1E88E5", "#43A047", "#E53935", "#FB8C00", "#8E24AA"]
    for i, (step, color) in enumerate(zip(steps, colors)):
        x = i * 0.19 + 0.04
        rect = plt.Rectangle((x, 0.15), 0.17, 0.65, facecolor=color, edgecolor="white", lw=2, alpha=0.85)
        ax.add_patch(rect)
        ax.text(x + 0.085, 0.45, step, ha="center", va="center", fontsize=8, fontweight="bold", color="white")
        if i < len(steps) - 1:
            ax.annotate("", xy=(x + 0.17 + 0.01, 0.45), xytext=(x + 0.17 - 0.01, 0.45),
                        arrowprops=dict(arrowstyle="->", color="gray", lw=2))
    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.text(0.5, 0.92, "Customer Churn Prediction Pipeline", ha="center", fontsize=13, fontweight="bold")
    fig.savefig(FIGS_DIR / "figure7_1_churn_pipeline.png", dpi=150, bbox_inches="tight")
    fig.savefig(FIGS_DIR / "figure7_1_churn_pipeline.svg", dpi=150, bbox_inches="tight")
    plt.close(fig)


def figure7_2_personalization_engine():
    fig, ax = plt.subplots(figsize=(8, 5))
    ax.axis("off")
    # User data
    rect = plt.Rectangle((0.05, 0.55), 0.22, 0.3, facecolor="#1E88E5", edgecolor="white", lw=2, alpha=0.85)
    ax.add_patch(rect)
    ax.text(0.16, 0.7, "User Data\n(history,\ndemographics)", ha="center", va="center", fontsize=8, fontweight="bold", color="white")
    # Real-time behavior
    rect2 = plt.Rectangle((0.05, 0.1), 0.22, 0.3, facecolor="#43A047", edgecolor="white", lw=2, alpha=0.85)
    ax.add_patch(rect2)
    ax.text(0.16, 0.25, "Real-time\nBehavior\n(clicks, views)", ha="center", va="center", fontsize=8, fontweight="bold", color="white")
    # AI Engine
    rect3 = plt.Rectangle((0.38, 0.25), 0.25, 0.45, facecolor="#E53935", edgecolor="white", lw=2, alpha=0.85)
    ax.add_patch(rect3)
    ax.text(0.505, 0.48, "Personalization\nEngine\n(AI Model)", ha="center", va="center", fontsize=9, fontweight="bold", color="white")
    # Recommendations
    rect4 = plt.Rectangle((0.72, 0.25), 0.23, 0.45, facecolor="#FB8C00", edgecolor="white", lw=2, alpha=0.85)
    ax.add_patch(rect4)
    ax.text(0.835, 0.48, "Personalized\nContent /\nProducts", ha="center", va="center", fontsize=8, fontweight="bold", color="white")
    # Arrows
    ax.annotate("", xy=(0.37, 0.7), xytext=(0.28, 0.7), arrowprops=dict(arrowstyle="->", color="gray", lw=1.5))
    ax.annotate("", xy=(0.37, 0.4), xytext=(0.28, 0.3), arrowprops=dict(arrowstyle="->", color="gray", lw=1.5))
    ax.annotate("", xy=(0.71, 0.48), xytext=(0.64, 0.48), arrowprops=dict(arrowstyle="->", color="gray", lw=2))
    # Feedback loop
    ax.annotate("", xy=(0.72, 0.15), xytext=(0.38, 0.25), arrowprops=dict(arrowstyle="->", color="gray", lw=1, ls="dashed"))
    ax.text(0.55, 0.12, "Feedback (implicit/explicit)", ha="center", fontsize=7, color="gray", fontstyle="italic")
    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.text(0.5, 0.92, "Personalization Engine Architecture", ha="center", fontsize=13, fontweight="bold")
    fig.savefig(FIGS_DIR / "figure7_2_personalization_engine.png", dpi=150, bbox_inches="tight")
    fig.savefig(FIGS_DIR / "figure7_2_personalization_engine.svg", dpi=150, bbox_inches="tight")
    plt.close(fig)


def figure7_3_saas_dashboard():
    fig, axes = plt.subplots(2, 3, figsize=(10, 6))
    fig.suptitle("SaaS Metrics Dashboard", fontsize=13, fontweight="bold", y=0.98)
    np.random.seed(42)
    # MRR
    months = np.arange(1, 13)
    mrr = 10000 + np.cumsum(np.random.normal(500, 200, 12))
    axes[0, 0].plot(months, mrr, "b-", lw=2)
    axes[0, 0].fill_between(months, mrr, alpha=0.2)
    axes[0, 0].set_title("Monthly Recurring Revenue", fontsize=8)
    axes[0, 0].set_xlabel("Month", fontsize=7)
    axes[0, 0].set_ylabel("MRR ($)", fontsize=7)
    axes[0, 0].tick_params(labelsize=6)
    # Churn
    churn = np.random.uniform(3, 8, 12)
    axes[0, 1].bar(months, churn, color="#E53935", alpha=0.7)
    axes[0, 1].axhline(y=5, color="gray", ls="--", lw=1)
    axes[0, 1].set_title("Monthly Churn Rate (%)", fontsize=8)
    axes[0, 1].set_xlabel("Month", fontsize=7)
    axes[0, 1].tick_params(labelsize=6)
    # New signups
    signups = np.random.poisson(80, 12) + np.arange(12) * 3
    axes[0, 2].plot(months, signups, "g-", lw=2, marker="o", markersize=4)
    axes[0, 2].set_title("New Signups", fontsize=8)
    axes[0, 2].set_xlabel("Month", fontsize=7)
    axes[0, 2].tick_params(labelsize=6)
    # Customer segments
    segments = ["Free", "Basic", "Pro", "Enterprise"]
    counts = [400, 250, 120, 30]
    axes[1, 0].pie(counts, labels=segments, autopct="%.0f%%", colors=["#B0BEC5", "#42A5F5", "#FFA726", "#66BB6A"])
    axes[1, 0].set_title("Customer Segments", fontsize=8)
    # NPS
    nps = np.random.normal(45, 5, 12)
    axes[1, 1].plot(months, nps, "purple", lw=2, marker="s", markersize=4)
    axes[1, 1].axhline(y=50, color="gray", ls="--", lw=1, label="Target")
    axes[1, 1].set_title("Net Promoter Score", fontsize=8)
    axes[1, 1].set_xlabel("Month", fontsize=7)
    axes[1, 1].tick_params(labelsize=6)
    axes[1, 1].legend(fontsize=6)
    # Revenue by segment
    rev_by_seg = [2000, 5000, 7200, 9000]
    axes[1, 2].barh(segments, rev_by_seg, color=["#B0BEC5", "#42A5F5", "#FFA726", "#66BB6A"], alpha=0.7)
    axes[1, 2].set_title("Monthly Revenue by Segment ($)", fontsize=8)
    axes[1, 2].tick_params(labelsize=6)
    plt.tight_layout()
    fig.savefig(FIGS_DIR / "figure7_3_saas_dashboard.png", dpi=150, bbox_inches="tight")
    fig.savefig(FIGS_DIR / "figure7_3_saas_dashboard.svg", dpi=150, bbox_inches="tight")
    plt.close(fig)


def main():
    print("Generating Module 1 figures...")
    figure1_1_ai_dimensions()
    print("  ✓ figure1_1_ai_dimensions.png")
    figure1_2_agent_environment()
    print("  ✓ figure1_2_agent_environment.png")
    figure2_1_ai_timeline()
    print("  ✓ figure2_1_ai_timeline.png")
    figure2_2_ai_hype_cycle()
    print("  ✓ figure2_2_ai_hype_cycle.png")
    figure3_1_ai_capability_pyramid()
    print("  ✓ figure3_1_ai_capability_pyramid.png")
    figure3_2_types_of_ai()
    print("  ✓ figure3_2_types_of_ai.png")
    figure4_1_paradigm_comparison()
    print("  ✓ figure4_1_paradigm_comparison.png")
    figure4_2_neural_network()
    print("  ✓ figure4_2_neural_network.png")
    figure4_3_ml_workflow()
    print("  ✓ figure4_3_ml_workflow.png")
    figure5_1_applications_mindmap()
    print("  ✓ figure5_1_applications_mindmap.png")
    figure5_2_recommendation_systems()
    print("  ✓ figure5_2_recommendation_systems.png")
    figure6_1_drug_discovery()
    print("  ✓ figure6_1_drug_discovery.png")
    figure6_2_alphafold()
    print("  ✓ figure6_2_alphafold.png")
    figure6_3_medical_imaging()
    print("  ✓ figure6_3_medical_imaging.png")
    figure7_1_churn_pipeline()
    print("  ✓ figure7_1_churn_pipeline.png")
    figure7_2_personalization_engine()
    print("  ✓ figure7_2_personalization_engine.png")
    figure7_3_saas_dashboard()
    print("  ✓ figure7_3_saas_dashboard.png")
    print("Module 1 figures complete!")


if __name__ == "__main__":
    main()
