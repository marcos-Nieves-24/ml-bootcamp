#!/usr/bin/env python3
"""Generate Plotly interactive versions of Module 1 conceptual figures + data plots."""
import numpy as np
import plotly.graph_objects as go
import plotly.express as px
from pathlib import Path
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report
from sklearn.datasets import make_classification
import pandas as pd

FIGS_DIR = Path(__file__).resolve().parent.parent.parent / "figures" / "module01"
FIGS_DIR.mkdir(parents=True, exist_ok=True)

def _save(fig, name):
    fig.write_html(str(FIGS_DIR / f"{name}_plotly.html"))
    fig.write_image(str(FIGS_DIR / f"{name}_plotly.png"), width=900, height=550)
    print(f"  ✓ {name}")

def figure2_1_ai_timeline():
    milestones = [
        (1950, "Turing Test", "blue"),
        (1956, "Dartmouth Workshop", "blue"),
        (1966, "ELIZA Chatbot", "green"),
        (1980, "Expert Systems", "orange"),
        (1997, "Deep Blue", "green"),
        (2012, "AlexNet (Deep Learning)", "green"),
        (2020, "GPT-3 (LLMs)", "green"),
        (2023, "Multimodal AI", "green"),
    ]
    fig = go.Figure()
    years, events, colors = zip(*milestones)
    fig.add_trace(go.Scatter(
        x=years, y=[1]*len(years), mode='markers+text',
        marker=dict(size=14, color=colors, line=dict(width=1, color='white')),
        text=events, textposition='top center', textfont=dict(size=10),
        hovertemplate='<b>%{x}</b><br>%{text}<extra></extra>'))
    fig.add_hline(y=1, line_color='gray', line_width=2)
    fig.update_layout(title='Línea de Tiempo de la IA', xaxis=dict(range=[1945, 2027]), yaxis=dict(visible=False), height=300)
    _save(fig, 'figure2_1_ai_timeline')

def figure2_2_ai_hype_cycle():
    x = np.linspace(0, 10, 200)
    y = 2 * np.sin(x - 2) * np.exp(-0.15 * x) + np.exp(-0.05 * x) * 0.5 + 0.5
    labels = [(1.2, 1.8, 'Peak of Inflated Expectations'), (3.5, 0.8, 'Trough of Disillusionment'),
              (6.0, 1.0, 'Slope of Enlightenment'), (8.5, 1.3, 'Plateau of Productivity')]
    fig = go.Figure()
    fig.add_trace(go.Scatter(x=x, y=y, mode='lines', line=dict(color='blue', width=2.5), name='Hype Cycle',
                             hovertemplate='x: %{x:.1f}<br>y: %{y:.2f}<extra></extra>'))
    for xp, yp, text in labels:
        fig.add_annotation(x=xp, y=yp, text=text, showarrow=True, arrowhead=1)
    fig.add_hline(y=0.5, line_dash='dash', line_color='gray', opacity=0.5)
    fig.update_layout(title='Gartner Hype Cycle para IA', xaxis_title='Tiempo / Madurez', yaxis_title='Expectativas')
    _save(fig, 'figure2_2_ai_hype_cycle')

def figure3_1_ai_capability_pyramid():
    levels = [
        ('AGI / ASI\nArtificial General Intelligence', '#E53935', 0.15),
        ('Deep Learning\nNeural networks with many layers', '#FB8C00', 0.35),
        ('Machine Learning\nAlgorithms that learn from data', '#43A047', 0.55),
        ('AI\nIntelligent agents and systems', '#1E88E5', 0.75),
    ]
    fig = go.Figure()
    for i, (label, color, width) in enumerate(levels):
        y_center = 3.5 - i
        x_center = 0.5
        fig.add_shape(type='rect', x0=x_center-width/2, y0=y_center-0.35, x1=x_center+width/2, y1=y_center+0.35,
                      fillcolor=color, opacity=0.85, line=dict(color='white', width=2))
        fig.add_annotation(x=x_center, y=y_center, text=label, showarrow=False, font=dict(color='white', size=11))
    fig.update_layout(title='Pirámide de Capacidades de IA', xaxis=dict(range=[0, 1], visible=False),
                      yaxis=dict(range=[-0.2, 4.2], visible=False), height=500, showlegend=False)
    _save(fig, 'figure3_1_ai_capability_pyramid')

def figure4_3_ml_workflow():
    steps = ['Data Collection', 'Data Cleaning', 'Feature Engineering', 'Model Training', 'Model Evaluation', 'Model Deployment']
    colors = ['#1E88E5', '#43A047', '#FB8C00', '#E53935', '#8E24AA', '#00ACC1']
    fig = go.Figure()
    for i, (step, color) in enumerate(zip(steps, colors)):
        fig.add_shape(type='rect', x0=i*0.16+0.04, y0=0.1, x1=i*0.16+0.18, y1=0.8,
                      fillcolor=color, opacity=0.85, line=dict(color='white', width=2))
        fig.add_annotation(x=i*0.16+0.11, y=0.45, text=step.replace(' ', '<br>'), showarrow=False,
                          font=dict(color='white', size=9, weight='bold'))
    fig.update_layout(title='Workflow de Machine Learning', xaxis=dict(range=[0, 1], visible=False),
                      yaxis=dict(range=[0, 1], visible=False), height=250, showlegend=False)
    _save(fig, 'figure4_3_ml_workflow')

def figure5_1_applications_mindmap():
    branches = [
        ('Healthcare', 0.3, 0.8, '#E53935', ['Diagnosis', 'Drug Discovery', 'Personalized Medicine']),
        ('Finance', 0.8, 0.8, '#43A047', ['Fraud Detection', 'Algorithmic Trading', 'Risk Assessment']),
        ('Transportation', 0.85, 0.3, '#FB8C00', ['Self-driving Cars', 'Route Optimization', 'Traffic Prediction']),
        ('Biotechnology', 0.2, 0.3, '#8E24AA', ['Genomics', 'Protein Folding', 'Clinical Trials']),
        ('SaaS', 0.5, 0.12, '#00ACC1', ['Churn Prediction', 'Recommendation', 'Customer Segmentation']),
        ('Education', 0.15, 0.6, '#5C6BC0', ['Adaptive Learning', 'Grading', 'Tutoring Systems']),
    ]
    fig = go.Figure()
    fig.add_annotation(x=0.5, y=0.5, text='AI<br>Applications', showarrow=False, font=dict(color='white', size=16, weight='bold'),
                      bgcolor='#1E88E5', borderpad=10, bordercolor='white')
    for name, x, y, color, items in branches:
        fig.add_annotation(x=x, y=y, text=name, showarrow=False, font=dict(color='white', size=10, weight='bold'),
                          bgcolor=color, borderpad=6, bordercolor='white')
    fig.update_layout(title='Aplicaciones de IA', xaxis=dict(range=[0, 1], visible=False),
                      yaxis=dict(range=[0, 1], visible=False), height=500, showlegend=False)
    _save(fig, 'figure5_1_applications_mindmap')

def figure6_1_drug_discovery():
    steps = ['Target ID', 'Hit Discovery', 'Lead Optimization', 'Preclinical', 'Clinical Trials', 'FDA Approval']
    ai_labels = ['Genomics', 'Virtual Screening', 'Molecular Dynamics', 'Toxicity Prediction', 'Stratification', '']
    colors = ['#1E88E5', '#43A047', '#FB8C00', '#E53935', '#8E24AA', '#00ACC1']
    fig = go.Figure()
    for i, (step, color, ai) in enumerate(zip(steps, colors, ai_labels)):
        x = i * 0.16 + 0.04
        fig.add_shape(type='rect', x0=x, y0=0.25, x1=x+0.14, y1=0.8, fillcolor=color, opacity=0.85, line=dict(color='white', width=2))
        fig.add_annotation(x=x+0.07, y=0.52, text=step, showarrow=False, font=dict(color='white', size=8, weight='bold'))
        if ai:
            fig.add_annotation(x=x+0.07, y=0.12, text=f'AI: {ai}', showarrow=False, font=dict(color=color, size=7))
    fig.update_layout(title='IA en el Pipeline de Descubrimiento de Fármacos', xaxis=dict(range=[0, 1], visible=False),
                      yaxis=dict(range=[0, 1], visible=False), height=300, showlegend=False)
    _save(fig, 'figure6_1_drug_discovery')

def figure7_1_churn_pipeline():
    steps = ['Customer Data', 'Feature Engineering', 'ML Model', 'Churn Probability', 'Retention Actions']
    colors = ['#1E88E5', '#43A047', '#E53935', '#FB8C00', '#8E24AA']
    fig = go.Figure()
    for i, (step, color) in enumerate(zip(steps, colors)):
        x = i * 0.19 + 0.04
        fig.add_shape(type='rect', x0=x, y0=0.15, x1=x+0.17, y1=0.8, fillcolor=color, opacity=0.85, line=dict(color='white', width=2))
        fig.add_annotation(x=x+0.085, y=0.48, text=step.replace(' ', '<br>'), showarrow=False,
                          font=dict(color='white', size=9, weight='bold'))
    fig.update_layout(title='Pipeline de Predicción de Churn', xaxis=dict(range=[0, 1], visible=False),
                      yaxis=dict(range=[0, 1], visible=False), height=250, showlegend=False)
    _save(fig, 'figure7_1_churn_pipeline')

def figure7_3_saas_dashboard():
    np.random.seed(42)
    months = list(range(1, 13))
    mrr = 10000 + np.cumsum(np.random.normal(500, 200, 12))
    churn = np.random.uniform(3, 8, 12)
    signups = np.random.poisson(80, 12) + np.arange(12) * 3
    segments = ['Free', 'Basic', 'Pro', 'Enterprise']
    counts = [400, 250, 120, 30]
    rev_by_seg = [2000, 5000, 7200, 9000]

    fig = make_subplots(rows=2, cols=3, subplot_titles=['MRR', 'Churn Rate (%)', 'New Signups', 'NPS', 'Revenue by Segment'],
                        specs=[[{'type':'xy'}, {'type':'xy'}, {'type':'xy'}],
                               [{'type':'xy'}, {'type':'xy'}, {'type':'domain'}]])
    fig.add_trace(go.Scatter(x=months, y=mrr, mode='lines', name='MRR', fill='tozeroy'), row=1, col=1)
    fig.add_trace(go.Bar(x=months, y=churn, name='Churn', marker_color='#E53935'), row=1, col=2)
    fig.add_trace(go.Scatter(x=months, y=signups, mode='lines+markers', name='Signups'), row=1, col=3)
    fig.add_trace(go.Scatter(x=months, y=np.random.normal(45, 5, 12), mode='lines+markers', name='NPS'), row=2, col=1)
    fig.add_trace(go.Bar(y=segments, x=rev_by_seg, orientation='h', name='Revenue'), row=2, col=2)
    fig.add_trace(go.Pie(labels=segments, values=counts, name='Segments'), row=2, col=3)
    fig.update_layout(title='SaaS Metrics Dashboard', height=600, showlegend=False)
    _save(fig, 'figure7_3_saas_dashboard')

def main():
    print("Generating Module 1 Plotly figures...")
    figure2_1_ai_timeline()
    figure2_2_ai_hype_cycle()
    figure3_1_ai_capability_pyramid()
    figure4_3_ml_workflow()
    figure5_1_applications_mindmap()
    figure6_1_drug_discovery()
    figure7_1_churn_pipeline()
    figure7_3_saas_dashboard()
    print("Module 1 Plotly figures complete!")

if __name__ == "__main__":
    from plotly.subplots import make_subplots
    main()
