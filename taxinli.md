---
layout: page
title: NSNLI
subtitle: Is Neuro-Symbolic SOTA still a myth for Natural Language Inference?
---

## TaxiNLI

Examples in the Natural Language Inference (NLI) task often encompass a variety of linguistic, logical and reasoning phenomena, and it remains unclear as to which specific concepts are learnt by the state-of-the-art systems and where they can achieve strong generalization. To investigate this question, authors in [TaxiNLI: Taking a ride up the NLU Hill](https://www.aclweb.org/anthology/2020.conll-1.4.pdf) proposed a taxonomic hierarchy of categories that are relevant for the NLI task. Authors introduce the TaxiNLI dataset, that has 10k examples from the MNLI dataset (<a href="https://www.aclweb.org/anthology/N18-1101/">Williams et al., 2018</a>) with these taxonomic labels.

<center><img src="../assets/img/taxonomy.png"></center>

The official release of the TaxiNLI dataset can be found [here](https://github.com/microsoft/TaxiNLI). Essentially each row in this data corresponds to an NLI example in the MultiNLI dataset (can be identified using pairID and genre). There are 15 reasoning categories, namely:
- Linguistic: lexical, syntactic, factivity
- Logic: 
   - negation, boolean, quantifier, conditional, comparative, 
   - relational reasoning, spatial reasoning, temporal reasoning, causal reasoning, coreference reasoning
- Knowledge: world_knowledge, taxonomic_knowledge

These 15 binary features indicate whether a certain kind of reasoning capability is required to perform the inference for that example. For unrelated neutral examples, authors add three more binary features (general_q2, subject_q2, object_q2).

### [Dataset Download](https://github.com/microsoft/TaxiNLI)
### [Link to Paper](https://www.aclweb.org/anthology/2020.conll-1.4/)

# TaxiNLI Statistics

Statistics |  |
--- | --- |
Total Datapoints | 10071 | 
Overlap with MNLI | 2343 (train), 7728 (dev) | 
Avg. Datapoints per Domain | 1007.1 | 
Datapoints per NLI label | 3374 (C), 3201 (N), 3494 (E) | 
Avg. Categories per example | 1.6 |
Neutral Example Stats | 3087 (Same topic), 2843 (Same object), 877 (Same subject)|


# More about the Taxonomy

The taxonomic categorization is meant to serve as a set of necessary inferencing capabilities that one would expect a competing NLI system to possess; thereby promoting more probing tasks along unexplored categories. Our categorization is based on the following principles. First, we take a model-agnostic approach, where we work from the first principles to arrive at a set of basic inferencing processes that are required in NLI task. These include an unrestricted variety of linguistic and logical phenomena, and may require knowledge beyond text, thus providing us with the higher-level categories: linguistic, logical and knowledge-based. Second, we retain categories that are non-overlapping and sufficiently represented in NLI datasets. 

**High-Level Categories:** The Linguistic category represents NLI examples where the inference process to determine the entailment are internal to the provided text. We classify examples as Logical when the inference process may involve processes external to text, such as mapping words to percepts and reason with them (<a href="https://www.springer.com/gp/book/9789048188444">Sowa, 2010</a>). Knowledge-based category represents examples where some form of external, domain or commonly assumed knowledge is required for inferencing.
Linguistic category is further sub-divided into lexical, syntactic, and factivity. 
1. Lexical: This category captures P-H pairs where the text is almost the same apart from removal, addition or substitution of some lexical items. Example: P: Anakin was kind. H: Anakin was cruel. 
2. Syntactic: Syntactic deals with examples where syntactic variations or paraphrases are essential to detecting entailment. Example: P: Anakin was an excellent pilot. H: The piloting skills of Anakin were excellent.
3. Factivity: Here the hypothesis contains an assumed fact from the premise, mostly an assumption about the existence of an entity or the occurrence of an action (inspired from <a href="https://arxiv.org/abs/1804.07461">Wang et al. (2018)</a>). Example: P: Padme recognized that Anakin was intelligent. H: Anakin was intelligent.

Based on commonalities, Logical categories are grouped under “Connectives”. “Mathematical” and “Deduction”.
1. Connectives (Negation, Boolean, Quantifiers, Conditionals, Comparatives): We group the logical categories negation, boolean, quantifier, conditional and comparative (<a href="https://arxiv.org/abs/1905.05704">Salvatore et al., 2019</a>) under the “Connectives” label. Negation applies when P negates one (or more) of the facts in H. We apply the category boolean when P is a set of statements connected by or, and and H talks about one of the statements. Quantifier is applied when P or H requires understanding of words denoting existential or universal quantifiers. Similarly, conditional is applicable where P or H has conditional statements. If P (or H) compares entities via comparative phrases, then we label it as comparative. Examples: (boolean and negation) P: Jar Jar, R2D2 and Padme only visited Anakin’s house. H: Jar Jar Binks didn’t visit Anakin’s shop.
2. Mathematical (Counting, Arithmetic): This group of categories is concerned with examples that require mathematical reasoning. For brevity, we concentrate on examples that require counting and simple arithmetic operations. However, we observed exceedingly low number of examples in this category group from our pilot study on SNLI and MNLI, and hence we remove these from our final annotations.
3. Deductions (Relational, Spatial, Temporal, Causal, Coreference): Motivated by predicate logic, success of qualitative representation and reasoning in dealing with temporal and spatial reasoning (<a href="https://www.aaai.org/Papers/JAIR/Vol23/JAIR-2305.pdf">Gabelaia et al., 2005</a>), and causality (<a href="https://www.cambridge.org/core/books/causality/B0046844FAE10CBF274D4ACBDAEB5F5B">Pearl, 2009</a>), we list relational, temporal, spatial and causal under “Deductions”. The relational reasoning stands for the requirement to perform deductive reasoning using relations present in text. Spatial (and temporal) denotes reasoning using spatial (and temporal) properties of objects represented in text. We also consider language-inspired reasoning categories such as co-reference resolution, which is known to often require event-understanding (<a href="https://dl.acm.org/doi/10.5555/3297863.3297916">Ng, 2017</a>) beyond superficial cues. Example: (relational) P: The lamp was working
properly. H: The lightbulb from the lamp was not functioning.

Lastly, we define two sub-categories under Knowledge, namely world and taxonomic. 
1. World: Examples that require knowledge about named entities, knowledge about historical, current events; and domain-specific knowledge. Example: (world) P: Michelle Obama stayed in the White House during 2009-17. H: Michelle was living in the White House legally during 2009.
2. Taxonomic: Examples that require taxonomies and hierarchies. For example, IsA, hasA, hasProperty relations. Example: (taxonomic) P: Norman hated all musical instruments. H: Norman loves the piano.


