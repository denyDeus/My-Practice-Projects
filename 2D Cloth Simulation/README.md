# Cloth Physics Simulation

A real-time cloth and soft-body physics simulation built using Python and Pygame.

This project demonstrates Verlet Integration, constraint solving, gravity simulation, interactive dragging, and cloth tearing mechanics using a lightweight particle-based physics engine.

---

## Features

- Real-time cloth simulation
- Verlet integration physics
- Gravity and damping
- Constraint-based stick system
- Interactive mouse controls
- Cloth tearing and cutting
- Fullscreen rendering
- Stable iterative constraint solver

---

## Technologies Used

- Python 3.13
- Pygame 2.6.1

---

## How It Works

The simulation consists of:

### Particles (Points)

Each point stores:

```python
[x, y, old_x, old_y, locked]
```

- Current position
- Previous position
- Locked state

The top row is locked to simulate hanging cloth.

---

### Sticks (Constraints)

Points are connected using virtual sticks:

```python
[index1, index2, active]
```

These constraints preserve the cloth structure by maintaining a fixed distance between points.

---

### Verlet Integration

Velocity is derived from positional differences:

```python
vx = current_x - old_x
vy = current_y - old_y
```

This provides:
- Stable motion
- Smooth cloth behavior
- Efficient physics calculations

---

### Constraint Solver

The engine repeatedly adjusts connected points to maintain stick lengths.

This creates realistic:
- Cloth movement
- Stretching
- Swinging
- Tension behavior

---

## Controls

| Action | Control |
|---|---|
| Drag cloth | Left Mouse Button |
| Cut cloth | Right Mouse Button |
| Exit simulation | ESC |

---

## Installation

Install Pygame:

```bash
pip install pygame
```

---

## Run the Project

```bash
python Net.py
```

---

## Project Structure

```text
Net/
│
├── Net.py
└── README.md
```

---

## Physics Concepts Used

- Verlet Integration
- Constraint Relaxation
- Particle Systems
- Soft Body Dynamics
- Distance Constraints
- Iterative Solvers

---

## Future Improvements

Possible upgrades:
- Wind simulation
- Collision detection
- Cloth texture rendering
- GPU optimization
- Elasticity settings
- Dynamic pinning
- Rope and soft-body presets

---

## Screenshot

The simulation renders a glowing hanging cloth mesh that reacts dynamically to user interaction and gravity.

---

## Author

Developed as a physics simulation experiment using Python and Pygame.