---
title: "Dynamic programming (DP)"
date: 2022-05-16T13:18:26+08:00
draft: true

# weight: 1
# aliases: ["/first"]
tags: ["first"]
author: "Me"
# author: ["Me", "You"] # multiple authors
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: false
description: "Desc Text."
canonicalURL: "https://canonical.url/to/page"
disableHLJS: true # to disable highlightjs
disableShare: false
disableHLJS: false
hideSummary: false
searchHidden: true
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowWordCount: true
ShowRssButtonInSectionTermList: true
UseHugoToc: true
cover:
    image: "<image path/url>" # image path/url
    alt: "<alt text>" # alt text
    caption: "<text>" # display caption under cover
    relative: false # when using page bundles set this to true
    hidden: true # only hide on current single page
editPost:
    URL: "https://github.com/<path_to_repo>/content"
    Text: "Suggest Changes" # edit text
    appendFilePath: true # to append file path to Edit link
---


The term `dynamic programming` (DP) refers to a *collection of algorithms that can be used to compute optimal polices given a perfect model of the environmen as MDPs*. Classical DP algorithms are of *limited* utility in RL both because of **their assumption of a perfect model** and **their great computational expense**.\
The key idea of DP, and of RL generally, is useof *value functions* to organize and structure the search for good policies. \
Remind of `optimal value function` and `optimal action-value functions`:
$$ v_{\*}(s) = \max\limits_{a}\sum\limits_{s',r}p(s',r|s,a)[r + \gamma v_{*}(s)] \quad \text{for all} \enspace s \in S, a \in A$$

$$ q_{\*}(s, a) = \sum\limits_{s',s}p(s',r|s,a)[r + \gamma\max\limits_{a'}q_{*}(s',a')] \quad \text{for all} \enspace s \in S, a \in A$$

### Policy Evaluation (Prediction)
First we consider how to compute the state-value function $v_{*}$ for an *arbitrary* policy $\pi$. This is called `Policy Evaluation`, we also refer to *prediction problem*.\
**Recall**
$$v_{\pi}(s) \doteq \sum\limits_{a}\pi(a|s)\sum\limits_{s',r|s,a}p(s',r|s, a)[r + \gamma v_{\pi}(s')]$$
\
Consider a sequence of approximate value functions $v_{0},v_{1},v_{2},...,$ each mapping $S'$ to the real numbers. The initial approxiamtion, $v_{0}$ is chosen arbitrarily (except that the terminal state, if any, must be given value 0), and each successive approximation is obtained by using the `Bellman equation`. The sequence $v_{k}$ can be shown in general to vonverge to $v_{\pi}$ as $k \leftarrow \infty$ under the same condistions that gurantee the existence of $v_{pi}$. This algorithm is called **`iteration policy evaluation`**.

#### Iteration Policy Evaluation Pseudocode
Input $\pi$ the policy to be evaluated\
Algorithm parameter: a small thershold $\theta > 0$ determining accuracy of estimation\
Initialize $V(s)$, for all $s \in S^+$, arbitrarily except that $V_{terminal} = 0$\
\
**Loop**:\
$\quad \triangle \leftarrow 0$\
$\quad$ **Loop** for each $s \in S$:\
$ \qquad$ $v \leftarrow V(s)$\
$ \qquad$ $V(s) \leftarrow \sum_{a}\pi(a,s)\sum_{s',r}p(s',r|s,a)[r + \gamma V(s')]$\
$ \qquad$ $\triangle \leftarrow \max(\triangle| v- V(s))$\
$\quad$ **until** $\triangle < \theta$

### Policy Improvement
The reason for computing the value function for a policy is to help find better policies. For some state $s$ we would like to know whether or not we should change the policy to deterministically choose an action $a \neq \pi(s)$. We know how good it is to follow the current policy frome $s$ -- but would it be better or worse to change to the new policy?\
The key criterion is whether this is greater than or less than $v_{\pi}(s)$. If it is `greater` that is, if it is better to select $a$ once in $s$ and therefore follow $\pi$ than it would be to follow $\pi$ all the time. Then one would expect it to be better still to select $a$ every time $s$ is encountered, and that the new policy would in fact be a better one overall.\
That this is treue is a special case of a general result called the **`policy improvement`**. Let $\pi$ and $\pi'$ be any pair of deterministic policies such that, for all $s \in S$:
$$q_{\pi}(s', \pi') \geq v_{\pi}(s)$$
Then the policy $\pi'$ must be as good as, or better than, $\pi$. That is, it must obtain greater or equal expected return from all state $s \in S$:
$$v_{\pi'}(s) \geq v_{\pi}(s)$$

### Policy Iteration
Iteratively perform Policy Evaluation and Policy Improvement until we reach the optimal policy.Once a policy $\pi$, has been improved using $v\pi$ to yield a better policy, $\pi'$, we can there compute $v\pi'$ and improve it again to yield an evn better $\pi''$.\
Because of a finite MDP has only a finite number of policies, this process must converge to an optimal policy and optimal value funciton in a finite number of iteration.

#### Policy Iteration Evaluation Pseudocode
1. Initialization\
   $V(s) \in \real$ and $\pi(s) \in A(s)$ arbitrarily for all $s \in S$\

2. Policy Evaluation\
   **Loop**:\
   $\quad  \triangle \leftarrow 0$\
   $\quad$ **Loop** for each $s \in S$:\
   $\qquad$ $v \leftarrow V(s)$\
   $\qquad$ $V(s) \leftarrow \sum_{a}\pi(a,s)\sum_{s',r}p(s',r|s,a)[r + \gamma V(s')]$\
   $\qquad$ $\triangle \leftarrow \max(\triangle| v- V(s))$\
   $\quad$ **until** $\triangle < \theta$ (a small positive number determining the accuracy of estimation)

3. Policy Improvement\
   *policy-stable* $ \; \leftarrow$ *true*\
   **For each** $s \in S$:\
   $\quad$ *old-action* $ \; \leftarrow \pi(s)$\
   $\quad$ $\pi(s) \leftarrow \argmax_{a}\sum_{s',r}p(s',r|p,s)[r + \gamma V(s')]$\
   $\quad$**if** *old-action* $ \neq \pi(s)$:\
   $\qquad$ *policy-stable* $\leftarrow $ false\
   **if** *policy-stable*:\
   $\quad$  **return** *optimal value function* and *optimal policy* \
   **else**:\
   $\quad$ Policy Evaluation

### Value Iteration
Instead of doing multiple steps of Policy Evaluation to find the 'corect' V(s) we only do a single step and improve the polciy immediately.\
One drawback to policy iteration is that each of its iterations involes policy evaluation, which may itself be a preotrated iterative computation requring multiple sweeps throus the state set. In fact, th policy evaluation step of policy iteration can be truncated in seral ways withou losing the convergence gurantees of policy iteration. One importan special case is when policy evaluation is stooped after just one sweep.

#### Value iteration Pseudocode
Algorithm parameter: a small thershold $\theta > 0$ determining accuracy of estimation\
Initialize $V(s)$, for all $s \in S^+$, arbitrarily except that $V(terminal) = 0$\
\
**Loop**:\
$\quad \triangle \leftarrow 0$\
$\quad$ **Loop** for each $s \in S$:\
$\qquad$ $v \leftarrow V(s)$\
$\qquad$ $V(s) \leftarrow \max_{a}\sum_{s',r}p(s',r|s,a)[r + \gamma V(s')]$\
$\qquad$ $\triangle \leftarrow \max(\triangle| v- V(s))$\
$\quad$ **until** $\triangle < \theta$\
**Output**: a deterministic optimal policy $\pi$,\
$\quad$ $\pi(s) = \argmax_{a}\sum_{s',r}p(s',r|s,a)[r + \gamma V(s')]$

### Asynchronous Dynamic Programming
A major drawback to the DP methoes that we have discussed is that they involve operations over the entire state set of the MDP. If the state set is very large, then even a single sweep can be prohibitively expensive.\
A *synchronous DP* algorithms are in-place iterative DP algorithms tha are not organized in terms of systematic sweeps of the state set. These algorithms update the values of states in any order, using whatever values of other states happen to be others are updated onec. To converge correctly, however, an asynchronous algorithm must continue to update the values of all the states: it can't ignore any state after some point in the computation.

### Generalized Policy Iteration

### Efficiency of Dynamic Programming
