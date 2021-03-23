---
layout: page
title: NSNLI
subtitle: Is Neuro-Symbolic SOTA still a myth for Natural Language Inference?
---

## CheckList

Inspired by principles of behavioral testing in software engineering, [Ribeiro et al (2020)](https://homes.cs.washington.edu/~marcotcr/acl20_checklist.pdf) introduce CheckList, a taskagnostic methodology for testing NLP models. With the help of CheckList tool we can create templates that aimed at testing a particular capability or phenomenon. A large number of diverse examples can then be generated from the template and then evaluated upon.

The capabilities listed in [Ribeiro et al (2020)](https://homes.cs.washington.edu/~marcotcr/acl20_checklist.pdf) are targeted to test a minimal set of properties of a system that are necessary yet feasible to check. For the NLI task, such capabilities can check the robustness of systems using perturbations along the capabilities. However, an NLI example represents a mix of many types of reasoning, spanning lexical, syntactic and semantic. To test an NLI system, it is important to test if such types of reasoning are captured individually and when combined in a deterministic, scalable manner. In some sense, some of the reasoning types, even if deemed not necessary, should inform the evaluator about the systems' properties in a holistic manner. We describe creation of CheckList for the Natural Language Inference (NLI) task, which systematically covers a set of reasoning capabilities necessary for NLI that is inspired from the recently proposed **TaxiNLI**. 

The table below lists a few templates along with the capability being tested by them

| Template | Label | Example | Capability |
|:---------|:-----:|:--------|:----------:|
| P: <span style="background-color:#fef9e7">{NAME}</span> is <span style="background-color:#fef9e7">{ADJ}</span> <br> H: <span style="background-color:#fef9e7">{NAME}</span> is <span style="background-color:#fef9e7">{Antonym(ADJ)}</span>. | <span style="background-color:#f5b7b1; padding:4px">contradiction</span> | P: Amjad is poor <br> H: Amjad is rich | antonym <br> (**Lexical**) |
| P: <span style="background-color:#fef9e7">{NAME}</span> is <span style="background-color:#fef9e7">{ADJ1}</span> and <span style="background-color:#fef9e7">{ADJ2}</span> <br> H: <span style="background-color:#fef9e7">{NAME}</span> is <span style="background-color:#fef9e7">{ADJ1/2}</span> | <span style="background-color:#f5b7b1; padding:4px">entailment</span> | P: William is cynical and selfish. <br> H: William is cynical | use of and <br> (**Boolean**) |
| P: Among <span style="background-color:#fef9e7">{NAME1}</span>, <span style="background-color:#fef9e7">{NAME2}</span> and <span style="background-color:#fef9e7">{NAME3}</span> the <span style="background-color:#fef9e7">{SUP ADJ}</span> is <span style="background-color:#fef9e7">{NAME1}</span> <br> H: <span style="background-color:#fef9e7">{NAME1}</span> is <span style="background-color:#fef9e7">{COM ADJ}</span> than <span style="background-color:#fef9e7">{NAME2}</span> | <span style="background-color:#f5b7b1; padding:4px">entailment</span> | P: Among James, Lily and Smith the tallest is James <br> H: James is taller than Lily | comparatives and superlatives <br> (**Comparative**) |
| P: <span style="background-color:#fef9e7">{NAME1}</span> was born in <span style="background-color:#fef9e7">{YEAR1}</span> and <span style="background-color:#fef9e7">{NAME2}</span> was born in <span style="background-color:#fef9e7">{YEAR2}</span>. <br> H: <span style="background-color:#fef9e7">{NAME1}</span> was born earlier than <span style="background-color:#fef9e7">{NAME2}</span><br>(condition YEAR1 < YEAR2) | <span style="background-color:#f5b7b1; padding:4px">entailment</span> | P: Martha was born in 1992 and Peter was born in 2001 <br> H: Martha was born earlier than Peter | reasoning about time <br> (**Temporal**) |
| P: <span style="background-color:#fef9e7">{NAME}</span> lives in <span style="background-color:#fef9e7">{CITY}</span>.<br> H: <span style="background-color:#fef9e7">{NAME}</span> lives in <span style="background-color:#fef9e7">{COUNTRY}</span> <br> (condition CITY does not belong to COUNTRY) | <span style="background-color:#f5b7b1; padding:4px">contradiction</span> | P: Rachel lives in Seoul. <br> H: Rachel lives in France | knowledge about countries and cities <br> (**World**)|

In the above templates `{NAME}`, `{ADJ}`, `{COM ADJ}`, `{SUP ADJ}`, `{CITY}`, `{COUNTRY}`, `{YEAR}` are placeholders which can be populated with different values (satisfying the condition) to generated a large number of test examples. We distinguish multiple use of same placeholders using numbers to identify them (`{NAME1}`, `{NAME2}`, ... etc will be filled with distinct values)

