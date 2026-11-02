/* ============ YOUR POSTS ============
   To add a post: copy one block, change the values, keep the comma between blocks.
   - slug: short name with letters, numbers and dashes only (used in the link)
   - cover: two colours for the card background, plus a symbol
   - content: HTML. Use <p>, <h2>, <ul>, <blockquote>, <pre><code>
   Newest posts first.
*/
const POSTS = [
 {
  slug: "plain-words-for-patients",
  title: "Patient Communication in Nursing: Health Literacy, Therapeutic Communication, and the Teach-Back Method",
  category: "Nursing",
  tags: ["nursing", "therapeutic-communication", "health-literacy", "patient-safety", "patient-education", "clinical-practice"],
  date: "2026-10-30",
  readTime: 9,
  cover: { a: "#0B3B5C", b: "#2B8FCB", symbol: "✚" },
  excerpt: "Effective nursing communication requires more than explaining a diagnosis. Explore health literacy, therapeutic communication, plain-language counselling, teach-back, and evidence-informed strategies for improving patient comprehension, treatment adherence, and safety.",
  content: `
    <p>Communication is a fundamental clinical competency in nursing. It influences how accurately patients understand their diagnoses, how safely they use medications, how effectively they participate in treatment decisions, and how confidently they manage their health after leaving a healthcare facility. Although clinical knowledge is essential, that knowledge has limited practical value when it cannot be communicated in a way that patients can understand and apply.</p>

    <p>A nurse may provide technically accurate information, use appropriate medical terminology, and explain a treatment plan in considerable detail, yet the patient may leave without understanding what the diagnosis means, why a medication is necessary, or which symptoms require urgent medical attention. This gap between information delivery and actual comprehension is a significant concern in patient-centred care.</p>

    <p>The solution is not to abandon professional terminology or oversimplify complex clinical information. Rather, nurses must develop the ability to translate clinical knowledge into accurate, understandable, culturally appropriate, and actionable information without losing its essential meaning.</p>

    <h2>Understanding Health Literacy in Clinical Practice</h2>

    <p><strong>Health literacy</strong> refers broadly to a person's ability to find, understand, evaluate, and use health-related information and services to make informed decisions about their health. It involves more than reading ability. A patient may be highly educated and still struggle to interpret a medication label, understand a new diagnosis, compare treatment options, or navigate an unfamiliar healthcare system.</p>

    <p>Health literacy is influenced by several factors, including the complexity of the information provided, the patient's preferred language, cultural context, emotional state, previous healthcare experiences, cognitive abilities, sensory limitations, and the demands placed on them by the healthcare environment.</p>

    <p>For example, a patient who has just received a diagnosis of heart failure may be overwhelmed by unfamiliar terminology, concerns about their prognosis, and anxiety about their family responsibilities. Even if the patient understands ordinary written English, these circumstances may reduce their ability to process and retain complex information during the consultation.</p>

    <p>Consequently, nurses should not assume that a patient's silence, educational background, social status, or apparent confidence indicates adequate understanding. Comprehension must be assessed through respectful communication rather than inferred from appearance or behaviour.</p>

    <h2>Medical Terminology: Accuracy Without Unnecessary Complexity</h2>

    <p>Clinical terminology is indispensable for precise communication among healthcare professionals. However, patient education requires a different communication approach. The objective is to preserve clinical accuracy while explaining unfamiliar concepts in language that supports understanding and informed decision-making.</p>

    <p>Consider the following examples of how clinical terms can be introduced appropriately during patient education:</p>

    <ul>
      <li><strong>Hypertension:</strong> Explain that the patient's blood pressure is persistently higher than recommended and that appropriate management can reduce the risk of complications, including stroke, heart disease, and kidney damage.</li>
      <li><strong>Hypoglycaemia:</strong> Explain that blood glucose has fallen below the desired level and discuss the symptoms, immediate management, and prevention measures relevant to the patient's treatment plan.</li>
      <li><strong>Oedema:</strong> Explain that swelling can occur when excess fluid accumulates in body tissues, then discuss the likely cause and any associated warning signs in the individual patient's situation.</li>
      <li><strong>Anticoagulant therapy:</strong> Explain that the medicine reduces the blood's ability to form clots and discuss the specific precautions and bleeding symptoms relevant to the prescribed medication.</li>
      <li><strong>Contraindication:</strong> Explain that a particular medicine, procedure, or treatment may be inappropriate because a specific condition or risk could make its use unsafe.</li>
      <li><strong>Adverse drug reaction:</strong> Explain that an unwanted or harmful effect has occurred in association with a medicine and describe what action the patient should take if it develops.</li>
    </ul>

    <p>These explanations should be adapted to the patient's diagnosis, treatment, level of understanding, and immediate clinical needs. A plain-language explanation must not replace essential safety information or imply that every patient with the same diagnosis requires identical advice.</p>

    <p>One particularly useful technique is to introduce the everyday explanation first, followed by the clinical term. For example: "Your blood pressure has been consistently higher than the recommended range. This condition is called hypertension."</p>

    <p>This approach allows the patient to understand the immediate meaning while gradually becoming familiar with the terminology they may encounter in medical records, prescriptions, investigations, and subsequent consultations.</p>

    <h2>Therapeutic Communication: Listening Is a Clinical Skill</h2>

    <p><strong>Therapeutic communication</strong> is the purposeful use of verbal and non-verbal communication techniques to support assessment, emotional expression, understanding, trust, and therapeutic relationships. Unlike casual conversation, therapeutic communication is directed towards the patient's healthcare needs and professional care objectives.</p>

    <p>Effective therapeutic communication involves active listening, open-ended questioning, clarification, reflection, appropriate silence, empathy, and respectful acknowledgement of the patient's concerns.</p>

    <p>For example, when a patient says, "I am afraid of taking this medication because I have heard it can damage my kidneys," a dismissive response such as "There is nothing to worry about" may discourage further discussion.</p>

    <p>A more therapeutic response would be: "I can see that you are concerned about how this medicine might affect your kidneys. Can you tell me what you have heard about it?"</p>

    <p>This response acknowledges the patient's concern, invites further explanation, and creates an opportunity to identify misinformation, previous adverse experiences, or legitimate clinical risks. The nurse can then provide accurate, individualised education and refer medication-specific questions to the appropriate prescriber or pharmacist when necessary.</p>

    <p>Therapeutic communication does not mean agreeing with every patient belief. It means responding respectfully, exploring the underlying concern, correcting misconceptions without humiliation, and supporting safe, informed decisions.</p>

    <h2>Three Core Strategies for Improving Patient Comprehension</h2>

    <h3>1. Use Plain Language and Structured Explanations</h3>

    <p>Plain language is a communication approach that presents information clearly, logically, and directly without unnecessary complexity. It does not mean using childish language, removing important clinical details, or assuming that patients have limited intelligence.</p>

    <p>Begin with the most important message, organise information into manageable sections, explain unfamiliar terms, and connect each instruction to its practical purpose. Avoid long, complicated sentences and excessive amounts of information delivered at once.</p>

    <p>For medication counselling, a structured explanation may cover the medicine's purpose, the prescribed dose and timing, the method of administration, relevant precautions, significant adverse effects, and what to do if a dose is missed or a problem occurs. The precise content depends on the medication and the patient's treatment plan.</p>

    <p>For example, rather than saying, "Administer the prescribed antihypertensive agent regularly to maintain adequate blood pressure control," a nurse could explain: "Take your blood pressure medicine according to the prescription. Taking it as directed helps control your blood pressure and reduces the risk of complications."</p>

    <p>Whenever possible, supplement verbal explanations with written instructions, diagrams, medication schedules, demonstrations, or other appropriate educational materials. Check that these materials are available in a language and format the patient can use.</p>

    <h3>2. Apply the Teach-Back Method</h3>

    <p>The <strong>teach-back method</strong> is a patient-education technique in which the healthcare professional asks the patient to explain important information in their own words. It provides an opportunity to assess whether the explanation was effective and to correct misunderstandings before the patient acts on the information.</p>

    <p>Teach-back should not be used as an examination of the patient's intelligence, memory, or willingness to cooperate. It is a check on the clarity and effectiveness of the communication process.</p>

    <p>For example, after explaining a new medication regimen, the nurse might say: "I want to make sure I explained the instructions clearly. Please walk me through how you will take this medicine at home."</p>

    <p>When providing discharge education, the nurse might ask: "Can you explain which symptoms would mean you should seek urgent medical attention?"</p>

    <p>If the patient's explanation reveals a misunderstanding, the nurse should revisit the relevant information using different words, a demonstration, or a simpler sequence of steps. The patient should then be invited to explain the information again.</p>

    <p>Teach-back is especially useful for high-risk or complex instructions, including medication changes, insulin administration, wound care, symptom monitoring, preparation for procedures, and discharge planning.</p>

    <p>Importantly, the nurse should confirm understanding of the critical safety information rather than assuming that one successful teach-back response establishes comprehension of every aspect of the care plan.</p>

    <h3>3. Manage Information Overload and Confirm Priorities</h3>

    <p>Patients may experience difficulty processing information when they are in pain, frightened, exhausted, acutely unwell, or confronted with a new diagnosis. Delivering more information does not necessarily produce better understanding.</p>

    <p>Organise patient education according to clinical urgency and the patient's immediate needs. Explain the most important information first, pause to allow questions, and address additional details in a logical sequence.</p>

    <p>For example, when educating a patient about a newly diagnosed chronic condition, the initial conversation may focus on what the condition means, the immediate treatment plan, essential medication instructions, and warning signs. More detailed discussions about long-term risk reduction and lifestyle modification can follow when the patient is ready to engage with them.</p>

    <p>Use open-ended questions to identify gaps in understanding. Questions such as "What concerns you most about this treatment?" or "Which part of these instructions would you like me to explain again?" can reveal barriers that a simple yes-or-no question might miss.</p>

    <p>Where appropriate, involve family members or caregivers with the patient's permission, while respecting confidentiality, autonomy, and the patient's right to make decisions about their care.</p>

    <h2>Non-Verbal Communication and Cultural Sensitivity</h2>

    <p>Communication extends beyond spoken words. Facial expressions, tone of voice, posture, physical positioning, eye contact, gestures, and the pace of conversation can influence whether patients feel respected, heard, and comfortable asking questions.</p>

    <p>A nurse who appears hurried, repeatedly interrupts the patient, or continues typing without acknowledging a concern may unintentionally communicate disinterest, even when the information being provided is clinically correct.</p>

    <p>However, non-verbal behaviour must be interpreted within the patient's individual and cultural context. Eye contact, personal space, gestures, and preferred forms of address do not carry identical meanings across all communities. Nurses should avoid making assumptions based on cultural stereotypes and should ask respectful questions when preferences are unclear.</p>

    <p>When language differences create a barrier, use an appropriate interpreter wherever available, particularly for informed consent, complex diagnoses, treatment decisions, and discharge instructions. Family members should not automatically be relied upon to interpret sensitive or high-risk clinical information when a qualified interpreter is needed.</p>

    <p>Communication should also accommodate hearing impairment, visual impairment, cognitive difficulties, and other accessibility needs. This may require adjusting the environment, providing accessible written information, using communication aids, or allowing additional time.</p>

    <h2>Communication Failures and Patient Safety</h2>

    <p>Communication errors can contribute to medication misuse, misunderstanding of treatment plans, missed follow-up appointments, delayed recognition of deterioration, and avoidable complications. Although not every adverse outcome results from poor communication, unclear or incomplete instructions can introduce preventable risks.</p>

    <p>Consider a patient who has received instructions about a newly prescribed medicine but does not understand the dose or timing. If the misunderstanding remains undetected, the patient may take the medicine incorrectly. Similarly, a patient discharged after an acute illness may not recognise which symptoms require urgent reassessment if warning signs have not been explained clearly.</p>

    <p>To strengthen patient safety, nurses should provide consistent information, verify medication-related details, encourage questions, document relevant education according to organisational policy, and communicate significant changes in the care plan to the appropriate healthcare professionals.</p>

    <p>Patient education should also be integrated into safe transitions of care. Before discharge, confirm that the patient understands essential instructions, knows how to obtain prescribed medications where applicable, understands follow-up arrangements, and knows when and where to seek additional help.</p>

    <p>When a patient appears unable to understand or follow an important instruction, investigate the underlying barriers rather than automatically labelling the patient as non-compliant. Possible factors include medication cost, limited access to transport, language differences, complicated regimens, adverse effects, health beliefs, cognitive difficulties, or inadequate social support.</p>

    <h2>Patient Autonomy, Informed Consent, and Professional Responsibility</h2>

    <p>Clear communication is closely connected to patient autonomy, informed consent, confidentiality, and shared decision-making. Patients need understandable information about relevant benefits, risks, alternatives, and consequences to participate meaningfully in decisions concerning their healthcare.</p>

    <p>Providing information does not, by itself, establish that informed consent has been obtained. Consent requires an appropriate decision-making process that respects the patient's capacity, voluntariness, questions, preferences, and applicable legal and professional requirements.</p>

    <p>Nurses should recognise the limits of their professional scope. They may reinforce an established treatment plan, explain nursing care, provide approved medication education, identify concerns, and escalate unanswered clinical questions. They should not independently alter prescribed treatment or provide assurances about risks that have not been adequately assessed.</p>

    <p>Patient confidentiality must also be maintained in clinical discussions, educational materials, case presentations, and public communication. Patient stories, photographs, records, and other identifiable information must not be shared publicly without appropriate authorisation and a lawful basis. Removing a patient's name alone may not be sufficient to prevent identification if other details remain recognisable.</p>

    <h2>A Practical Framework for Every Patient-Education Encounter</h2>

    <p>Nurses can use the following sequence when explaining an important diagnosis, medication, procedure, or care instruction:</p>

    <ol>
      <li><strong>Assess:</strong> Determine what the patient already knows, what they are concerned about, their preferred language, and any communication or accessibility needs.</li>
      <li><strong>Explain:</strong> Present the most important information in plain language while preserving clinical accuracy.</li>
      <li><strong>Organise:</strong> Divide complex information into manageable sections and prioritise immediate safety requirements.</li>
      <li><strong>Invite questions:</strong> Encourage the patient to express concerns, uncertainties, and preferences without fear of judgement.</li>
      <li><strong>Verify:</strong> Use teach-back or demonstration to confirm understanding of essential instructions.</li>
      <li><strong>Reinforce:</strong> Correct misunderstandings, repeat critical information where necessary, and provide suitable written or visual support.</li>
      <li><strong>Document and communicate:</strong> Record relevant education, the patient's demonstrated understanding, unresolved concerns, and any necessary escalation in accordance with professional and organisational standards.</li>
    </ol>

    <h2>Clinical Reflection: From Information Delivery to Understanding</h2>

    <p>Imagine that you are preparing a patient for discharge after treatment for an acute illness. You explain the prescribed medication, dietary advice, follow-up arrangements, and warning signs. The patient nods throughout the discussion and tells you that everything is clear.</p>

    <p>Before discharge, you ask the patient to explain how they will follow the medication instructions and what they will do if their symptoms worsen. Their response reveals that they have misunderstood an important instruction.</p>

    <p>This situation illustrates a central principle of patient education: apparent agreement is not reliable evidence of comprehension. A patient may nod out of politeness, embarrassment, anxiety, respect for professional authority, or a desire to end a difficult conversation.</p>

    <p>The appropriate response is to clarify the misunderstanding, provide a more effective explanation, confirm understanding again, and address any remaining barriers before proceeding, within the requirements of the patient's clinical circumstances and discharge plan.</p>

    <p><strong>Reflection questions:</strong></p>

    <ul>
      <li>How often do you rely on "Do you understand?" as your main method of checking comprehension?</li>
      <li>What communication barriers are most common in your clinical environment?</li>
      <li>How could teach-back improve the safety of medication administration or discharge education in your practice?</li>
      <li>What changes could your nursing team introduce to make patient education more consistent and effective?</li>
    </ul>

    <h2>Conclusion: Communication Is Part of Clinical Competence</h2>

    <p>Effective patient communication is not an optional addition to nursing practice. It is an essential component of assessment, health education, therapeutic relationships, shared decision-making, and patient safety.</p>

    <p>Clinical expertise must be accompanied by the ability to explain, listen, clarify, adapt, and verify understanding. Nurses who communicate effectively do more than transfer information; they help patients understand their circumstances, participate in decisions, recognise important risks, and manage their health with greater confidence.</p>

    <p>The professional standard is not simply to deliver the correct information. It is to make reasonable efforts to ensure that the patient understands the information necessary for their care.</p>

    <blockquote>
      Effective nursing communication is achieved not when the explanation ends, but when the patient has had a meaningful opportunity to understand, question, and apply the information provided.
    </blockquote>

    <p><strong>Key learning point:</strong> Use accurate terminology, explain unfamiliar concepts in plain language, practise therapeutic listening, manage information overload, and verify essential instructions through teach-back. These habits help transform clinical knowledge into safer, more patient-centred care.</p>
  `
},

 {
    slug: "beyond-memorisation-nursing-council-exams",
    title:
      "Beyond Memorisation: How to Prepare for Nursing Council Examinations",
    category: "Nursing",
    tags: [
      "nursing",
      "nursing-council-exams",
      "exam-preparation",
      "clinical-reasoning",
      "nursing-education",
    ],
    date: "2026-11-01",
    readTime: 4,
    cover: { a: "#102C46", b: "#237A9F", symbol: "✚" },
    excerpt:
      "Passing a nursing council examination requires more than memorising notes. Build clinical understanding, sharpen your judgement, and learn to think like a safe, competent nurse.",
    content: `
    <p>Nursing Council examinations are more than an assessment of how much information a student can recall. They challenge candidates to demonstrate the knowledge, clinical judgement, professional responsibility, and decision-making skills expected of a nurse entering professional practice.</p>

    <p>One of the most common preparation mistakes is relying entirely on memorisation. A candidate may remember the definition of shock but struggle to recognise its early manifestations in a clinical scenario. Another may memorise drug classifications without understanding their indications, contraindications, adverse effects, or nursing responsibilities.</p>

    <p><strong>The difference between recalling information and understanding it can determine how effectively you answer a clinical question.</strong></p>

    <h2>Prepare for Understanding, Not Just Recall</h2>

    <p>When studying a topic, move beyond definitions. Ask yourself three questions: What is happening in the patient's body? Why is it happening? What should the nurse assess or do, and why?</p>

    <p>For example, when studying hypoglycaemia, understand its causes, clinical manifestations, immediate assessment priorities, appropriate interventions, and the dangers of delayed treatment. This approach builds a connected understanding that is more useful than memorising isolated facts.</p>

    <h2>Learn to Interpret the Question</h2>

    <p>Examination questions may ask for the <em>first</em>, <em>priority</em>, <em>most appropriate</em>, or <em>best</em> nursing action. These words matter. Several options may appear reasonable, but only one may address the immediate clinical priority.</p>

    <p>Before selecting an answer, identify what the question is actually testing. Consider the patient's safety, the urgency of the situation, the available clinical information, and the nurse's scope of practice. Do not select an option simply because it contains a familiar medical term.</p>

    <h2>Practise Actively and Correct Your Weaknesses</h2>

    <p>Reading notes repeatedly can create a false sense of confidence. Strengthen your preparation through active recall, practice questions, timed mock examinations, and regular revision.</p>

    <p>When you answer a question incorrectly, do not merely memorise the correct option. Understand why it is correct, why your chosen answer was wrong, and why the other options are less appropriate. Keep a record of recurring mistakes and revisit those topics until you can explain them confidently.</p>

    <p>Give particular attention to pharmacology, medical-surgical nursing, maternal and child health, community health, nursing procedures, ethics, infection prevention, and patient safety, according to your examination syllabus.</p>

    <h2>Protect Your Confidence and Your Well-Being</h2>

    <p>Examination preparation can be emotionally demanding. Comparing your progress with other candidates, studying without adequate rest, or attempting to cover an entire syllabus in a few days can undermine your performance.</p>

    <p>Develop a realistic study timetable, set daily learning targets, practise consistently, and protect your sleep. If you discover a weak area, treat it as information about what needs improvement, not proof that you are incapable of succeeding.</p>

    <h2>The Mindset That Matters</h2>

    <p>Your goal is not simply to pass an examination. It is to develop the knowledge and judgement required to provide safe, ethical, evidence-informed nursing care.</p>

    <p>Study to understand. Practise to improve. Review your mistakes without shame. Approach each question with discipline rather than panic.</p>

    <blockquote>
      Do not study merely to remember the right answer. Study until you understand why it is right, when it applies, and what could happen if you get it wrong.
    </blockquote>

    <p><strong>Final reflection:</strong> If you were asked to explain a clinical concept without opening your notes, could you describe what it means, recognise it in a patient, and identify the appropriate nursing priorities? If not, you have found your next study target.</p>
  `,
  },


  {
    slug: "write-the-ugly-first-draft",
    title: "Write the ugly first draft",
    category: "Writing",
    tags: ["fiction", "habits", "drafting"],
    date: "2026-10-28",
    readTime: 4,
    featured: true,
    cover: { a: "#0E2A2B", b: "#1F6F6B", symbol: "✍" },
    excerpt: "A first draft only has one job: to exist. Here is how I stopped editing while I wrote.",
    content: `
      <p>For years I edited every sentence the moment it landed. The result was a beautiful first chapter and no second one.</p>
      <h2>Give the draft one job</h2>
      <p>A first draft only has to exist. You cannot fix a page that was never written, and you cannot judge a story you have not finished telling yourself.</p>
      <blockquote>Finish the story first. Then find out what it was about.</blockquote>
      <h2>Three rules that helped me</h2>
      <ul>
        <li>Write for 25 minutes without going back.</li>
        <li>Leave a bracket like [check this] instead of stopping to research.</li>
        <li>End each session mid-sentence, so tomorrow starts easily.</li>
      </ul>
      <p>The ugly draft is not a failure. It is the clay. Everything good you make afterwards is shaped from it.</p>`
  },
  {
    slug: "my-first-flutter-app-lessons",
    title: "What my first Flutter app taught me",
    category: "Code",
    tags: ["flutter", "dart", "apps"],
    date: "2026-10-22",
    readTime: 6,
    cover: { a: "#14213D", b: "#3B5BDB", symbol: "◆" },
    excerpt: "Widgets, state and a few mistakes I would happily skip next time.",
    content: `
      <p>Flutter makes a screen appear very quickly. That speed hides the real work: deciding where your data lives.</p>
      <h2>Keep state simple</h2>
      <p>Start with the simplest thing that works. Move to a bigger solution only when the pain is real.</p>
<pre><code>class Counter extends StatefulWidget {
  const Counter({super.key});
  @override
  State&lt;Counter&gt; createState() =&gt; _CounterState();
}</code></pre>
      <h2>Small widgets win</h2>
      <p>If a build method scrolls past one screen, split it. Small widgets are easier to read, test and reuse.</p>`
  },
  {
    slug: "free-ai-tools-for-web-building",
    title: "Building websites with free AI tools",
    category: "Tools",
    tags: ["ai", "vscode", "ollama"],
    date: "2026-10-15",
    readTime: 5,
    cover: { a: "#3A1F5C", b: "#7C3AED", symbol: "✦" },
    excerpt: "You do not need a paid plan to get a helpful coding assistant. Here is what I am testing.",
    content: `
      <p>Local models running on your own computer cost nothing per message. The trade-off is speed and size.</p>
      <h2>What to expect</h2>
      <p>Small models are good at structure and weaker at polish. Treat the output as a strong first pass, then refine it yourself.</p>
      <ul>
        <li>Give very clear, specific instructions.</li>
        <li>Ask for one section at a time.</li>
        <li>Always read the code before you trust it.</li>
      </ul>`
  },
  {
    slug: "a-calm-daily-routine-for-creators",
    title: "A calm daily routine for creators",
    category: "Life",
    tags: ["habits", "focus"],
    date: "2026-10-08",
    readTime: 3,
    cover: { a: "#7A3E00", b: "#E8A33D", symbol: "☀" },
    excerpt: "Two focused blocks beat a whole day of half attention.",
    content: `
      <p>I used to work all day and feel like I had done nothing. Now I protect two blocks and let the rest of the day be flexible.</p>
      <h2>The two blocks</h2>
      <p>Morning is for the hardest creative task. Afternoon is for admin, messages and learning. When a block ends, I stop.</p>
      <blockquote>Rest is part of the work, not a reward for it.</blockquote>`
  },
  {
    slug: "css-tricks-i-use-every-week",
    title: "CSS tricks I use every week",
    category: "Code",
    tags: ["css", "html", "design"],
    date: "2026-09-30",
    readTime: 5,
    cover: { a: "#0F3D2E", b: "#2FA37A", symbol: "{ }" },
    excerpt: "Grid, clamp() and custom properties solve most layout problems.",
    content: `
      <p>Modern CSS can do a lot without a framework. These three ideas cover most of my layouts.</p>
      <h2>Fluid type with clamp()</h2>
<pre><code>h1 { font-size: clamp(2rem, 5vw, 3.5rem); }</code></pre>
      <h2>Auto-fit grids</h2>
<pre><code>.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}</code></pre>
      <h2>Custom properties</h2>
      <p>Store colours and spacing in variables once, and change your whole theme in one place.</p>`
  },
  {
    slug: "how-to-build-a-story-world",
    title: "How to build a story world without drowning in notes",
    category: "Writing",
    tags: ["fiction", "worldbuilding"],
    date: "2026-09-18",
    readTime: 7,
    cover: { a: "#5C1F2E", b: "#C2410C", symbol: "❖" },
    excerpt: "Build only what the story touches, and let the rest stay mysterious.",
    content: `
      <p>Worldbuilding is a lovely trap. You can spend a year on maps and never write a scene.</p>
      <h2>Build what the story touches</h2>
      <p>If a character never eats, you do not need a national cuisine. Add detail when a scene asks for it.</p>
      <ul>
        <li>One rule of the world that changes everything.</li>
        <li>One place readers will visit often.</li>
        <li>One tension between two groups of people.</li>
      </ul>`
  },
  {
    slug: "why-i-started-this-blog",
    title: "Why I started this blog",
    category: "Life",
    tags: ["introduction"],
    date: "2026-09-01",
    readTime: 2,
    cover: { a: "#1B1B3A", b: "#6D5BD0", symbol: "★" },
    excerpt: "A short hello, and what you can expect here.",
    content: `
      <p>I wanted one place to keep what I learn, so I would stop losing it in notebooks and chat threads.</p>
      <p>Expect posts about writing, code and making a creative life that you can keep up. Thanks for reading.</p>`
  }
];
