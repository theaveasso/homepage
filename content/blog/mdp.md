---
title: "Markov Decision Process (MDP)"
date: 2022-05-16T13:18:26+08:00
draft: true

# weight: 1
# aliases: ["/first"]
tags: ["AI", "Reinforcement Learning", "MDP"]
author: ["theaveasso"]
# author: ["Me", "You"] # multiple authors
math: true
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: false
description: "An Introdution to Markov Decision Process, Summary from Introduction to Reinforcement Learning Sutton Bato, 2nd edition Chapter 3"
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


**MDPs** are a classical formalization of sequential decision making, where actions influence not just immediate rewards, but also subsequence situations, or states, and through future rewards. In MDPs we *estimate* the value $q_{\*}(s, a)$ of each action $a$ in each state $s$, or we *esitmate* value $v_{\*}(s)$ of each state given the optimal action selections.

### The Agent-Environment Interface
MDPS are meant to be a straightforward framing of the problem of learning from interaction to achieve the goal. **`Agent`** who is the learner and decision maker. The things it *interacts with* comprising everything outside the agent, is called **`Environment`**.
\
This interaction continually, the agent selecting actions and the environment responding to these actions and presenting new situations(states) to the agent. The environment also given rise to rewards, that the agent seeks to cumulative over time through its choice of actions.\
The *agent* and *environment* interact at each of a `sequence of discrete time steps,` $t = 0.1.2...N$ At each timestep $t$, *the agent* receives some representation of the environment's state $S_{t} \in S$, and on that basis selects an action, $A_{t} \in A(s)$. One time step later, in part as a consequence of its action $A_{t}$, *the agent* receives a numerical reward $R_{t+1} \in R$, and finds itself in a new state, $S_{t+1}$. 
\
The MDP and agent together thereby give rise to a sequence or `trajectory` that begins like this:
$$S_{0}, A_{0}, R_{1}, S_{1}, A_{1}, R_{2},  S_{2}, A_{2}, R_{3}, ...$$ 
\
In *finite MDPs*, the sets of states, actions, and rewards ($S, A$, and $R$) all have a finite number of elements. In this case, the *random variables* $R_{t}$ and $S_{t}$ have well defined discrete probability distributions dependent only on the preceding state and action. That is, for particular values of these *random variables*, $s' \in S$ and $r \in R$, there is a probability of those values occuring at time $t$, given particular values of the preceding state and action:
$$p(s', r | s, a) \doteq Pr({S_{t} = s', R_{t} = r | S_{t-1} = s, A_{t-1} = a})$$
To simplified this formular, remember that $p$ specifies a probability distribution for each choice of given state $s$ and action $a$ that is, that:
$$ \sum \limits_{s' \in S} \sum\limits_{r \in R} p(s', r | s, a) \doteq 1, \quad \text{for all} \enspace s \in S a \in A$$

### Goals and Rewards
In RL, the purpose or goal of the agent is formalized in terms of special signal, called the **`reward`**, passing from the environment to the agent. Informally, the agent's *goal* is `to maximize the total amount of reward` it receives. This means maximizing not *immediate reward*, but *cumulative reward* in the long run.
> That all of what we mean by foals and purposes can be well thought of as the maximization of the *expected value* of the cumulative sum of a received scalar signal (called reward). 

`The use of a reward signal` to formalize the idea of a goal is one of the most distinctive features of reinforcement learning.\
The reward signal is not the place to impart to the agent prior knowledge about how to achieve what we want to do. Than main goal is to reach the end goal not subgoals. If achieving these of subgoals were rewarded, then the agent might find a way to achieved them without achieving the end goal.

### Returns and Episodes
- In general, we seek to maximize the *expected return*, where the return, denoted $G_{t}$ is deined as some specific function of the reward sequence (the sum of the rewards):
$$ G_{t} = R_{1} + R_{2} + R_{3} + ... + R_{T}$$
- When the agent-environment interaction breaks naturally into subsequences, which we call **`episodes`**. Each episode ends in a special state called **`the terminal state`**, followed by a reset to a standard starting state or to a sample from a standard distribution of starting states. 

Thus the episodes can all be considered to end in the same terminal state, with different rewards for tht different outcomes. Tasks with episodes of this kind are called **`episodic tasks`**. Differently if the agent-environmenrt interaction does not break naturally into identifiable episodes, but goes on continually without limit we called it **`continuing tasks`**. \
The return formulation os problematic for continuing tasks becauase the final time step would be $T = \infty$, and return, which is what we are trying to maximize, could itself easily be infinite. To solve this we introduce *discount factor*:
$$ G_{t} \doteq R_{t+1} + \gamma R_{t+2} + \gamma^2 R_{t+3} + ...  = \sum\limits_{k-0}^\infty \gamma^k R_{t+k+1}$$
where $\gamma$ is a parameter, 0 $\leq \gamma \leq$ 1, called **`discount factor`**. *This disocunt rate determines the present value of future rewards a reward received $k$ time steps in the future is worth only $\gamma^k-1$ times what it would be worth if it were reveived immediately.* As $\gamma$ approcaches 1, the return objective takes future rewards into account more strongly; the agent becomes more *farsighted*.\
\
Return at succesive time steps are related to each other in a way that is important for the theory and algorithms of reinforcement learning:
$$G_{t} \doteq R_{t+1} + \gamma G_{t+1}$$

### Unified Notation for Episodic and Continuing Tasks
We need to consider a series of episodes, each of which consists of *infinite sequence of timesteps*. We have to refer the state representation at time $t$ of episode $i$ (and similarly for $A_{t,i}, R_{t,i}, \pi_{t,i}, T_{i}$, etc.). We need one other convention to obtain a single notation that covers both *episodic* and *continuing* task. We have defined the return as sum over a finite number of terms and as a sum over an infinite nber of terms in the other. These two can be *unified* by considering episode termination to be the entering of a special *obsorbing state* that transitions only to itself and that generates only rewards of zero. Alternatively we can write:
$$G_{t} \doteq \sum\limits_{k=t+1} \gamma^{k-t-1} R_{k}$$


### Policies and Value Funtions
Reinforcement Learning algorithms involve *estimating value funtion*- functions of states (or of state-action pairs) that esitmate *how good* it is for the agent to be in a given state (or how good it is to perform a given action in a given state). `How good` here is defined in ters of future rewards that can be expected. Of course the rewards the agent can expect to receive in the future depend on what actions it will take. Accordingly, `Value Functions` is are defined with repect to particular ways of active, called `policies`.
- A **`Policy`** is a mapping from states to probabilities of selecting each posible action. If the agen is following policy $\pi$ at time $t$, then $\pi_{t}(a | s)$ is the probability that $A_{t} = a, S_{t} = s$.
- The **`Value function`** of a state $s$ under a policy $\pi$, denoted $v_{\pi}(s)$ is the expected return when starting in $s$ and following $\pi$ thereafter. For MDPs, we can define $v_{\pi}(s)$ by:
$$v_{\pi}(s) \doteq E_{\pi}[G_{t}|S_{t} = s] = E_{\pi}[\sum\limits_{k=0}^\infty \gamma^k R_{t+k+1}| S_{t}=s], \enspace \text{for all} \enspace s \in S$$

- Similarly, we define the value of taking action $a$ in state $s$ under a policy $\pi$, denoted $q_{\pi}(s, a)$, as the epected return starting from $s$, taking the action $a$, and thereafter following the policy $\pi$:
$$q_{\pi}(s|a) \doteq E_{\pi}[G_{t} | S_{t}=s, A_{t}=a] = E_{\pi}[\sum\limits_{k=0}^\infty \gamma^k R_{t+k+1}| S_{t}=s, A_{t}=t]$$

Fundamental property of value functions used throughout reinforcement learning and dynamic programing is that ther satisfy recursive relationships. For any policy $\pi$ and any state $s$, the following consistency condition holds between the value of $s$ and the value of its possible successor states (**`Bellman equation of`**):
$$v_{\pi} \doteq \sum\limits_{a} \pi(a|s) \sum\limits_{s',r}p(s',r|s, a)[\gamma + \gamma v_{\pi}(s')], \quad \text{for all} \enspace s \in S$$

### Optimal Policies and Optimal Value Fnctions
We can define an optimal policy by: defined a better policy $\pi$ to be greater than or equal $\pi'$ if its expected return is greater than or equal to that of $\pi'$ for all states. There is always at east one policy that is better than or equal to all other policies. Although there may be more than one optimal policies, we donoted by $\pi_{\*}$.\
They share the smae state-value function, call **`optimal state-value function`**, denoted $v_{\*}(s)$ defined as:
$$v_{\*}(s) \doteq \max\limits_{\pi}v_{\pi}(s)$$
Optimal policies also share the same **`optimal action-value function`**, denoted $q_{\*}(s, a)$ defined as:
$$q_{\*}(s, a) \doteq \max\limits_{\pi}q_{\pi}(s, a)$$
for all $s \in S$ and $a \in A(s)$, For the state-action pair $(s, a)$, ths function gives us the expected return for taking action $a$ in state $s$ and thereafter following an optimal policy. Thus, er can write $q_{\*}$ in terms of $v_{\*}$ as:
$$q_{\*}(s, a) \doteq E[R_{t+1} + \gamma v_{*}(S_{t+1}) | S_{t}=s, A_{t} = a] $$

# Summary
- Reinforcement learning is about learning problems fromm interaction how to behave in order to achieve a goal.
- The Reinforcement learning *agent* and *environment* interact over a sequence of discrete time steps `t`.
- The *actions* are the choices made by the agent, the *states* are the basis for making the choices and the *rewards* are the basis for evaluating the choices.
- A *policy* is a stochastic rule by which the agent selects actions as a function of states. The agent's objective is to maximize the amount of reward it receives over time.
- The *return* `G` is the function of future rewards that the agent seeks to maximize (in expected value).
- *Markov Decision Process* is formulated with a well defined transition probabilities of the future state and reward the agent recieve base on the action the agent took in the current state `p(s', r | s, a)`.
- A finite MDP is an MDP with finite state, action, and reward sets.
- The value function `v(s)` estimates how good it is for an agent to be in a particular state. 
- The action value function (q table) `q(s,a)`: estimates how good it is for anagent to be in state `s` and take action `a`.
- *Episodic taskes*, in which the agent-environment interaction breaks naturally into episodes.
- *Continuing tasks*, in which the interaction does not naturally break into episodes byt continues without limit.
- Policy's *value function* assign to each state, or state-action pair, the expected return from the state, or state-action pair, given that the agent use the policy. The optimal value functions assign to each state, or state-action pair, the largest expected return achiecvable by any policy. A policy whose value functions are optimal is an optimal policy.
- The *Bellman optimality equation* are special consistency conditions that the optimal value functions must satisfy and that can, in principle, be solved for the optimal value functions, from which an optimal policy can be dermined with relative ease.
- In MDP, the agent is typically unable to perform enough computation per time step to fully use it. The memory available is also an important constraint. Meomory may be required to build up accurate approxomations of value functions, policies, and models. 


