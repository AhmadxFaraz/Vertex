// --- Data Structure ---
const studyData = [
  {
    id: "topic_1",
    title: "1. Complex Variables & Differential Calculus",
    description: "Limits, continuity, and differential coefficients of functions of complex variables.",
    color: "blue",
    tasks: [
      { id: "u1_t1_1", text: "Theory: Functions of complex variables", type: "theory", completed: false },
      { id: "u1_t1_2", text: "Theory: Limits and continuity of complex functions", type: "theory", completed: false },
      { id: "u1_t1_3", text: "Theory: Differential coefficients of a function of complex variables", type: "theory", completed: false },
      { id: "u1_t1_4", text: "Exercise 19: Q1 to 20 (Chandrika Prasad)", type: "problem", completed: false }
    ]
  },
  {
    id: "topic_2",
    title: "2. Analytic Functions & Milne Thomson Method",
    description: "Cauchy-Riemann equations, analyticity conditions, harmonic functions, and Milne Thomson's method.",
    color: "indigo",
    tasks: [
      { id: "u1_t2_1", text: "Theory: Analytic functions & Cauchy-Riemann equations", type: "theory", completed: false },
      { id: "u1_t2_2", text: "Theory: Necessary and sufficient condition of analyticity (Theorems 10.8 and 10.9 from Jain & Iyengar)", type: "theory", completed: false },
      { id: "u1_t2_3", text: "Theory: Harmonic functions", type: "theory", completed: false },
      { id: "u1_t2_4", text: "Theory: Construction of analytic function: Milne Thomson's Method", type: "theory", completed: false },
      { id: "u1_t2_5", text: "Solved examples 10.32, 10.33, 10.35, 10.36, 10.38, 10.44, 10.45, 10.48 (Jain & Iyengar)", type: "problem", completed: false },
      { id: "u1_t2_6", text: "Exercise 10.5: Q27, 28, 49, 50 (Jain & Iyengar)", type: "problem", completed: false },
      { id: "u1_t2_7", text: "Exercise 10.6: Q12, 13, 19 (Jain & Iyengar)", type: "problem", completed: false }
    ]
  },
  {
    id: "topic_3",
    title: "3. Complex Line Integrals & Domains",
    description: "Curves in complex plane, line integrals, and connected domains.",
    color: "purple",
    tasks: [
      { id: "u1_t3_1", text: "Theory: Curves in the complex plane & line integral (pg 11.3 to 11.7, Jain & Iyengar)", type: "theory", completed: false },
      { id: "u1_t3_2", text: "Theory: Simply connected and multiply connected domains", type: "theory", completed: false },
      { id: "u1_t3_3", text: "Solved examples 1, 2 (Chandrika Prasad)", type: "problem", completed: false },
      { id: "u1_t3_4", text: "Exercise 21: Q1 to 10 (Chandrika Prasad)", type: "problem", completed: false },
      { id: "u1_t3_5", text: "Solved examples 11.10, 11.11, 11.19, 11.20, 11.24, 11.25, 11.29, 11.31-11.35, 11.39-11.41 (Jain & Iyengar)", type: "problem", completed: false },
      { id: "u1_t3_6", text: "Exercise 11.2: Q1, 3, 4, 13, 14, 15, 16 (Jain & Iyengar)", type: "problem", completed: false }
    ]
  },
  {
    id: "topic_4",
    title: "4. Cauchy's Theorem & Integral Formula",
    description: "Cauchy's theorem, Cauchy's integral formula, and extensions to multiply connected domains.",
    color: "teal",
    tasks: [
      { id: "u1_t4_1", text: "Theory: Cauchy's Theorem", type: "theory", completed: false },
      { id: "u1_t4_2", text: "Theory: Cauchy's integral formula (pg 166 to 169, Chandrika Prasad)", type: "theory", completed: false },
      { id: "u1_t4_3", text: "Theory: Extension of Cauchy integral theorem to multiply connected domains", type: "theory", completed: false },
      { id: "u1_t4_4", text: "Exercise 11.3: Q8, 9, 11, 14, 22, 23, 26, 28 (Jain & Iyengar)", type: "problem", completed: false }
    ]
  },
  {
    id: "topic_5",
    title: "5. Complex Integration Practice",
    description: "Targeted problem sets on Cauchy integral formulas and contour integration.",
    color: "amber",
    tasks: [
      { id: "u1_t5_1", text: "Exercise 11.4: Q11, 12, 13, 14, 15, 16 (Jain & Iyengar)", type: "problem", completed: false },
      { id: "u1_t5_2", text: "Exercise 11.5: Q1, 4, 5, 6, 8 (Jain & Iyengar)", type: "problem", completed: false }
    ]
  }
];
