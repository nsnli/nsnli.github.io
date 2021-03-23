---
layout: page
title: NSNLI
subtitle: Is Neuro-Symbolic SOTA still a myth for Natural Language Inference?
---

## TaxiNLI

Examples in the Natural Language Inference (NLI) task often encompass a variety of linguistic, and logical reasoning phenomena, and it remains unclear as to which specific concepts are learnt by the state-of-the-art systems and where they can achieve strong generalization. To investigate this question, authors in [TaxiNLI: Taking a ride up the NLU Hill](https://www.aclweb.org/anthology/2020.conll-1.4.pdf) proposed a taxonomic hierarchy of categories that are relevant for the NLI task. The taxonomy is shown below.

<center><img src="../assets/img/taxonomy.png" width="40%" height="15%"></center>

Authors derive the high-level categories (<em>Linguistic</em>, <em>Logical</em>, and <em>Knowledge</em>) working from the first principles to arrive at a set of basic inferencing processes that are required in the NLI task. Then, authors use the following principles for retention and pruning of reasoning categories: 1) retain categories that are non-overlapping and sufficiently represented in the NLI datasets, 2) include a list of necessary sub-categories (inspired by prior work), and 3) restrict sub-divisions whenever the definitions get complicated.

### TAXINLI Dataset 
Authors introduce the TaxiNLI dataset, that has 10k examples from the MNLI dataset (<a href="https://www.aclweb.org/anthology/N18-1101/">Williams et al., 2018</a>) with these taxonomic labels. The official release of the TaxiNLI dataset can be found [here](https://github.com/microsoft/TaxiNLI). Essentially each row in this data corresponds to an NLI example in the MultiNLI dataset (can be identified using pairID and genre). There are 15 reasoning categories, namely:
- Linguistic: lexical, syntactic, factivity
- Logic: 
   - negation, boolean, quantifier, conditional, comparative, 
   - relational reasoning, spatial reasoning, temporal reasoning, causal reasoning, coreference reasoning
- Knowledge: world knowledge, taxonomic knowledge

These 15 binary features indicate whether a certain kind of reasoning capability is required to perform the inference for that example. For unrelated neutral examples, authors add three more binary features (general, subject, object).

Statistics |  |
--- | --- |
Total Datapoints | 10071 | 
Overlap with MNLI | 2343 (train), 7728 (dev) | 
Avg. Datapoints per Domain | 1007.1 | 
Datapoints per NLI label | 3374 (C), 3201 (N), 3494 (E) | 
Avg. Categories per example | 1.6 |
Neutral Example Stats | 3087 (Same topic), 2843 (Same object), 877 (Same subject)|


## Examples from TaxiNLI

The taxonomic categorization is meant to serve as a set of necessary inferencing capabilities that one would expect a competing NLI system to possess; thereby promoting more probing tasks along unexplored categories. Examples are provided below.

| Taxonomic Category | Short Description | Example | 
|:------------------:|-------------------|---------|
| Lexical | addition, removal, substitution of some lexical items | P: so it’s stayed cold for the **entire** week <br> H: It has been cold for the **whole** week. |
| Syntactic | syntactic variation, ellipses, paraphrases | P: Those in Egypt, Libya, Iraq, and Yemen were eventually overthrown by secular nationalist revolutionaries. <br> H: Secular nationalist revolutionaries eventually overthrew them in Egypt and Libya. |
| Factivity | hypothesis contains an assumed fact from the premise about the existence of an entity or the occurrence of an action | P: The best place to view the spring azaleas is at the Azalea Festival in the last week of April at Tokyo’s Nezu shrine. <br> H:There is an Azalea Festival at the Nezu Shrine. |
| Negation | use of negation words (not, never), negation verbs (can't, didn't), negation adverbs (hardly, rarely), double negation | P: They **post** loads of newspaper articles–Yahoo! <br> H: Yahoo does **not post** any articles from newspapers. |
| Boolean | connectives (and, or, both), ordered resolution | P: According to contemporaneous notes, at 9:55 the Vice President was still on the phone with the President advising that three planes were missing **and** one had hit the Pentagon. <br> H: The President called the Vice President to tell him the plane hit the Pentagon.|
| Quantifier | use of quantifiers like all, every, some, few, none etc | P: **Some** travelers add Molokai and Lanai to their itineraries. <br> H: **No one** decides to go to Molokai and Lanai. |
| Conditional | statements depending on validity of a condition (if, when, only etc) | P: If the revenue is transferred to the General Fund, it is recognized as nonexchange revenue in the Government-wide consolidated financial statements. <br> H: Revenue from the General Fund is not considered in financial statements |
| Comparative | use of comparative/superlative adjectives (-er/-est, more/most) | P: Load time is divided into elemental and coverage related load time. <br> H: The coverage related load time **is longer than** elemental. |
| Relational | Reasoning with relations present<br> in text.| P: Actually, **my sister** wrote a story on it. <br> H: **My sibling** created a story about it. |
| Spatial | sense of direction, 2D/3D spatial reasoning, far/near | P: At the eastern end of Back Lane and turning right, Nicholas Street becomes Patrick Street, and in St. Patrick’s Close is St. Patrick’s Cathedral . <br> H: Nicholas Street becomes Patrick Street after turning left at the eastern end of Back Lane. |
| Temporal | sense of time, date, months, year, before/after, early/late | P: See you **Aug. 12, or soon thereafter**, we hope. <br> H: The person told not to come **until December**. |
| Causal | Reaosning about Cause-Effect | P: Acroseon the mountainside is another terrace on which imperial courtiers and dignitaries would sit while enjoying dance performances and music recitals on the **hondo’s broad terrace**. <br> H: There is a **terrace** where musicians play |
| Coreference | resolving expressions refering to the same entity in a text - anaphora, cataphora. | P: A dozen minor wounds crossed his forearms and body. <br> H: The grenade explosion left him with a lot of wounds.|
| World | require knowledge about named entities, knowledge about historical, current events; and domain-specific knowledge | P: In this respect, bringing Steve Jobs back to save Apple is like bringing Gen. <br> H: Steve Jobs unretired in 2002.|
| Taxonomic | require taxonomies and hierarchies. For example, IsA, hasA, hasProperty relations. | P: Benson’s action picture in Lucia in London (Chapter 8)- Georgie stepped on a beautiful **pansy**. <br> H: Georgie crushed a beautiful **flower** in Chapter 8 of Lucia in London. |

### [Dataset Download](https://github.com/microsoft/TaxiNLI)
### [Link to Paper](https://www.aclweb.org/anthology/2020.conll-1.4/)


