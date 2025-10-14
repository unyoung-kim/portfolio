import Image from "next/image";
import agenticEmbeddingMain from "public/images/project/agentic-embedding-main.png";
import alphaDropUrl from "public/images/project/alpha-drop-url.png";
import alphaExample from "public/images/project/alpha-examples.png";
import alphaMain from "public/images/project/alpha-main.png";
import alphaSide1 from "public/images/project/alpha-side1.png";
import anomalyDetectionMain from "public/images/project/anomaly-detection-main.png";
import anomalyDetectionSide1 from "public/images/project/anomaly-detection-side1.png";
import egocentricVideoGenerationMain from "public/images/project/egocentric-video-gen-main.png";
import egocentricVideoGenSide1 from "public/images/project/egocentric-video-gen-side1.png";
import gymptMain from "public/images/project/gympt-main.png";

export const products = [
  {
    href: "",
    title: "Post-training Video Models for Egocentric Video Generation",
    description:
      "Post-training video generation models to generate egocentric video creation for robotics synthetic data generation.",
    thumbnail: egocentricVideoGenerationMain,
    images: [egocentricVideoGenerationMain],
    stack: [
      "Computer Vision",
      "Video Generation",
      "Synthetic Data",
      "Robotics",
    ],
    slug: "egocentric-video-gen",
    content: (
      <div>
        <p>
          Ilya Sutskever claimed, &quot;Data is the fossil fuel of AI.&quot;
          Specifically, internet and web text have been the fuel powering the
          exponential growth of LLMs. While some argue we&apos;re running out of
          data to further train these models, the rapid advancement of LLMs has
          clearly demonstrated the capability of transformers and the empirical
          validity of scaling laws.
        </p>
        <p>
          Robotics doesn&apos;t have that luxury. There is no web-scale corpus
          of &quot;doing.&quot; The world isn&apos;t a dataset you can scrape at
          2 a.m. Motion, contact, objects, people - each interaction is
          expensive to witness and even more expensive to record with fidelity.
          Not to mention that physical AI must run small unlike LLMs, which can
          burst from a data center, a robot&apos;s brain often has to live
          on-device.
        </p>
        <p>
          <strong>So how do we create a fossil fuel for Robotics?</strong>
        </p>
        <p>
          Currently, the field leans on <strong>teleoperation</strong>: a person
          puppeteering a robot while the robot watches and learns. Each robot
          gets, at best, 24 hours a day of potential operation, but people
          fatigue long before that and in practice, robots &quot;fatigue&quot;
          faster because batteries drain, joints heat up, sensors drift,
          maintenance intervenes.
        </p>
        <p>
          Then we have <strong>simulation</strong>, also known as{" "}
          <strong>digital twins</strong>, that can run 10,000× faster than
          teleoperation with tens of thousands of rollouts in parallel on a GPU.
          We can mirror real robots in virtual space and rehearse them in
          virtual environments. Build the twin, then spawn variations. Systems
          like{" "}
          <a
            href="https://build.nvidia.com/nvidia/isaac-gr00t-synthetic-manipulation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GR00T mimic
          </a>{" "}
          help seed these worlds and behaviors.
        </p>
        <p>
          <strong>
            But we have another problem: how do we generate this scene?
          </strong>
        </p>
        <div className="my-6">
          <Image
            src={egocentricVideoGenSide1}
            alt="Complex scene with food, fire, glass, and various objects"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <p>
          The world is closer to this image than clean simulation environemtns.
          There&apos;s food, fire, and breakable glass, forks, drinks, and
          plants, each with different textures. It&apos;s hard to build a
          simulation that matches this real-world complexity and this is where
          video-generation models can help. These models have been getting
          better at following the physical rules of the world (e.g.,{" "}
          <a
            href="https://arxiv.org/abs/2410.18072"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <em>
              WorldSimBench: Towards Video Generation Models as World Simulators
            </em>
          </a>
          ). If we can make a video-generation model perform tasks from an
          egocentric perspective, we can compensate for the lack of
          environmental diversity that current data-collection methods
          (teleoperation and simulation/digital twins) struggle to provide. To
          that end, I&apos;m post-training state-of-the-art, open-source vision
          models to follow prompts in egocentric views as a way to address the
          diversity shortage in today&apos;s physical-AI data.
        </p>
      </div>
    ),
  },
  {
    href: "https://www.alpha.page",
    title: "Alpha - AI Website Builder",
    description:
      "Alpha is an AI native website builder that allows you to create websites using natural language. Used by over 4,000 users worldwide.",
    thumbnail: alphaMain,
    images: [alphaSide1, alphaMain],
    stack: ["AI", "Web Development", "SaaS", "Code Generation"],
    slug: "alpha",
    content: (
      <div>
        <p>
          Alpha is an AI-powered website builder that transforms natural
          language descriptions into fully functional websites. I personally
          have struggled with the existing website builders and the cost of
          hiring a designer. Users simply describe what they want and Alpha
          generates a complete website in seconds.
        </p>

        <div className="my-6">
          <video
            src="https://aqfdwixvirtzccefysco.supabase.co/storage/v1/object/public/chat-video/alpha-copy-url-demo.mp4"
            controls
            muted
            className="w-full rounded-lg shadow-lg"
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="my-6">
          <Image
            src={alphaExample}
            alt="Alpha website builder interface showing generated website examples"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <h3 className="font-bold text-lg mt-6 mb-2">Key Features</h3>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>
            <strong>AI-Powered Design:</strong> Intelligent layout and styling
            suggestions based on your content
          </li>
          <li>
            <strong>Natural Language Editing:</strong> Modify any part of your
            website by simply describing the changes you want
          </li>
          <li>
            <strong>Built-in Analytics:</strong> Track visitor behavior and
            website performance with integrated analytics
          </li>
          <li>
            <strong>Built-in Forms:</strong> Create contact forms, surveys, and
            lead capture forms without coding
          </li>
        </ul>

        <div className="my-6">
          <Image
            src={alphaDropUrl}
            alt="Alpha interface showing URL input and website generation process"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <p>
          Alpha is used by over <strong>4,000 users worldwide</strong> to create
          websites ranging from personal portfolios to business landing pages.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/unyoung-kim/agentic-embedding",
    title: "Agentic Embedding",
    description:
      "Multimodal unstructured data parsing using agentic embedding.",
    thumbnail: agenticEmbeddingMain,
    images: [agenticEmbeddingMain],
    stack: ["RAG", "Multimodal AI", "Document AI", "Embeddings"],
    slug: "agentic-embedding",
    content: (
      <div>
        <p>
          This project was inspired by the newly published research paper{" "}
          <a
            href="https://arxiv.org/abs/2407.01449"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            ColPali: Efficient Document Retrieval with Vision Language Models
          </a>
          , which introduces a full image approach to document retrieval. Rather
          than extracting and processing text separately, ColPali directly
          embeds images of document pages using Vision Language Models,
          capturing both visual and textual information in a unified
          representation.
        </p>
        <p>
          Retrieval-Augmented Generation (RAG) systems are gaining significant
          popularity among legacy industries such as law, life sciences, and
          finance, where there are massive amounts of unstructured text that are
          multimodal. Gathering insights from these extensive piles of
          documentation previously involved manual searches and insight
          generation from graphs and diagrams, which are extremely
          time-consuming and laborious, even for highly intelligent individuals.
          Companies like Harvey and Hebbia that have recently bagged huge funds
          exemplify how RAG systems can expedite this process by not only
          finding relevant documents but also providing a GPT-like interface
          that directly answers user questions.
        </p>
        <p>
          However, RAG systems often hallucinate, especially when they fail to
          find relevant answers from the pool of embedded documents. Achieving
          performance from 80% to 100% is extremely challenging but crucial
          especially for vertical use cases where mistakes can be costly and
          unforgiving.
        </p>
        <p>
          While foundational models are often blamed and guardrails built with
          hallucination models (e.g., Lynx) are gaining popularity, the
          importance of embedding strategies and the limitations of multimodal
          embedding are less frequently discussed.
        </p>
        <p>
          Agentic Embedding is a new AI engineering term that I coined, which
          implies a method of utilizing different prompts or methods to embed
          various types of modalities (e.g., text, tables, graphs, diagrams,
          photos, etc.). While the code serves as a simple demonstration of the
          concept, it also explores the current limitations of traditional OCR
          methods in processing unstructured multimodal documents.
        </p>
        <p>
          Here, we use the Mistral 7B research paper from arXiv:{" "}
          <a
            href="https://arxiv.org/abs/2310.06825"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://arxiv.org/abs/2310.06825
          </a>
          . This paper has been selected for demonstration because it&apos;s
          truly multimodal! (including graphs, bar charts, and diagrams).
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/unyoung-kim/Anomaly-Detection",
    title: "Synthetic Data Generation for Anomaly Detection",
    description:
      "Synthetic data generation / Data augmentation to increase the robustness of blockchain fraud detection.",
    thumbnail: anomalyDetectionMain,
    images: [anomalyDetectionMain, anomalyDetectionSide1],
    stack: [
      "Machine Learning",
      "Synthetic Data",
      "Fraud Detection",
      "Data Augmentation",
    ],
    slug: "synthetic-data-generation-for-anomaly-detection",
    content: (
      <div>
        <p>
          Anomaly detection problems typically suffer from extreme class
          imbalance: &quot;normal&quot; events dominate, while anomalies (e.g.,
          fraud) are rare but costly to miss. We investigate whether synthetic
          minority data augmentation improves supervised fraud detection. Using
          the public credit-card transactions dataset (features V1–V28, Time,
          Amount; label Class), we compare (i) baseline Logistic Regression and
          (ii) Isolation Forest, then evaluate two augmentation strategies—SMOTE
          and CTGAN—applied only to the training set to avoid leakage.
        </p>
        <p>
          Our primary objective is to increase recall on the minority class
          (fraud) while maintaining reasonable precision. CTGAN augmentation
          increases minority recall from 0.71 (baseline) to up to 0.85 (with
          100% synthetic anomalies relative to the original dataset), with
          modest precision trade-offs and an overall F1 improvement (e.g., from
          0.79 → 0.83 at ~5–10% synthetic anomalies). We outline implications
          for blockchain anomaly detection and discuss best practices for robust
          evaluation under heavy imbalance.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2">
          1. Problem Framing & Metrics
        </h3>
        <p>
          <strong>Goal:</strong> Maximize detection of fraudulent transactions
          (positive class = Class=1) at acceptable false-positive rates.
        </p>
        <p>
          <strong>Why accuracy is insufficient:</strong> With ~0.17% positives,
          a trivial &quot;all normal&quot; classifier attains high accuracy but
          zero utility. Report Precision, Recall, and F1; PR curves/PR-AUC are
          recommended.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2">2. Data & Preprocessing</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Features:</strong> V1..V28, Time, Amount; label Class
          </li>
          <li>
            <strong>Scaling:</strong> RobustScaler for Time and Amount
          </li>
          <li>
            <strong>Split:</strong> 80/20 train/test with random_state=2
          </li>
          <li>
            <strong>No leakage:</strong> augmentation occurs only in training
          </li>
        </ul>

        <h3 className="font-bold text-lg mt-6 mb-2">3. Models</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Logistic Regression (supervised)</strong> — simple, strong
            baseline
          </li>
          <li>
            <strong>Isolation Forest (unsupervised)</strong> — anomaly scoring
            (fit on X only), performance depends on contamination/threshold
            choice
          </li>
        </ul>

        <h3 className="font-bold text-lg mt-6 mb-2">
          4. Baseline Results (No Augmentation)
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Logistic Regression:</strong> Precision 0.90, Recall 0.71,
            F1 0.79 (Accuracy 0.999—uninformative here)
          </li>
          <li>
            <strong>Isolation Forest:</strong> Precision 0.30, Recall 0.44, F1
            0.36 (Accuracy 0.999)
          </li>
        </ul>
        <p>
          <strong>Takeaway:</strong> Supervised baseline outperforms
          out-of-the-box Isolation Forest.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2">
          5. Data Augmentation Methods
        </h3>
        <p>
          <strong>5.1 SMOTE:</strong> Interpolates between minority neighbors to
          balance classes. Outcome: Recall ≈ 0.90 but Precision ≈ 0.05 →
          minority F1 ≈ 0.10 (too many false positives).
        </p>
        <p>
          <strong>5.2 CTGAN:</strong> Generates synthetic frauds; we add
          synthetic anomalies to training at ratios 0.5%, 1%, 5%, 10%, 20%, 50%,
          100% of dataset size.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2">6. Results</h3>
        <p>
          All metrics below are on the same held-out real test set (no synthetic
          data).
        </p>
        <p>
          <strong>Baselines:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Logistic Regression: P=0.90, R=0.71, F1=0.79</li>
          <li>Isolation Forest: P=0.30, R=0.44, F1=0.36</li>
        </ul>
        <p>
          <strong>SMOTE (Logistic Regression):</strong> Minority Recall ≈ 0.90,
          Precision ≈ 0.05, F1 ≈ 0.10. Interpretation: excessive false
          positives; poor precision–recall balance.
        </p>
        <p>
          <strong>CTGAN (Logistic Regression) — representative points:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>0.5% synthetic: P=0.86, R=0.74, F1=0.79</li>
          <li>1% synthetic: P=0.87, R=0.74, F1=0.80</li>
          <li>5% synthetic: P=0.84, R=0.77, F1=0.81</li>
          <li>10% synthetic: P=0.87, R=0.79, F1=0.82</li>
          <li>20% synthetic: P=0.86, R=0.81, F1=0.83</li>
          <li>50% synthetic: P=0.82, R=0.83, F1=0.83</li>
          <li>100% synthetic: P=0.82, R=0.85, F1=0.83</li>
        </ul>
        <p>
          <strong>Summary:</strong> Versus baseline, CTGAN improves F1 by ~3–4
          points and Recall by ~8–14 points, with precision remaining reasonable
          (0.82–0.87). Gains are consistent across sample ratios from ~5% to
          100%, with a sweet spot around 10–20% where recall rises and precision
          is still strong. Metric variance is expected due to the small number
          of positives in the test set; repeated runs/stratified splits are
          advised.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2">8. Discussion</h3>
        <p>
          CTGAN better captures complex minority structure than linear
          interpolation (SMOTE), expanding the decision boundary where it
          matters. It substantially boosts recall without collapsing precision.
          Guard against generator artifacts with realism checks (TSTR/TSNR,
          nearest-neighbor distances, UMAP visualization).
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2">
          10. Extension to Blockchain Anomaly Detection
        </h3>
        <p>
          <strong>Feature families:</strong> transaction-level, address-level,
          graph-structural, temporal, and cross-entity.
        </p>
        <p>
          <strong>Preprocessing:</strong> robust scaling/log transforms; avoid
          temporal/causal leakage.
        </p>
        <p>
          <strong>Augmentation:</strong> CTGAN per segment
          (token/protocol/behavior cluster); treat categorical/discrete columns
          explicitly; validate realism so a classifier can&apos;t trivially
          separate real vs synthetic.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2">11. Conclusion</h3>
        <p>
          On an imbalanced credit-card dataset, CTGAN-based minority
          augmentation consistently improves recall and F1 over a strong
          logistic baseline while keeping precision high—unlike SMOTE, which
          induces excessive false positives. With careful temporal validation,
          threshold selection, and realism checks, this approach is promising
          for blockchain anomaly detection, where labeled anomalies are scarce
          and heterogeneous.
        </p>
      </div>
    ),
  },
  {
    href: "",
    title: "GymPT",
    description:
      "On-Device Pose Detection for Workout Tracking. 1st place at UChicago Class Hackathon out of 60 people.",
    thumbnail: gymptMain,
    images: [gymptMain],
    stack: ["Computer Vision", "Pose Detection", "On-Device ML", "Mobile"],
    slug: "gympt",
    content: (
      <div>
        <h3 className="font-bold text-lg mt-4 mb-2">Motivation</h3>
        <p>
          Traditional workout tracking solutions rely on expensive wearables,
          external sensors, or manual counting—all of which present barriers to
          accessibility and user engagement. We wanted to build a solution that
          could accurately track exercise performance using just a smartphone
          camera, making fitness tracking accessible to everyone without
          additional hardware.
        </p>
        <p>
          From a learning perspective, we were excited to explore the challenge
          of fitting machine learning models into resource-constrained mobile
          devices and understand the performance trade-offs involved in
          on-device inference. This project gave us hands-on experience with
          optimizing ML models for real-time execution on consumer hardware.
        </p>
        <p>
          Functionally, we aimed to go beyond simple rep counting. GymPT tracks
          exercise <strong>form quality</strong> in real-time—if your form is
          incorrect (e.g., insufficient squat depth, improper elbow position),
          the system won&apos;t count the repetition. This ensures users not
          only track their workouts but also maintain proper technique to
          prevent injury and maximize effectiveness.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2">
          Technical Implementation
        </h3>
        <p>
          We built a full-stack mobile app using <strong>React Native</strong>{" "}
          and <strong>TensorFlow.js</strong> that performs real-time pose
          estimation entirely on-device. The system uses computer vision to
          detect and track key body joints (shoulders, elbows, hips, knees,
          etc.) through the phone&apos;s camera, eliminating the need for
          external sensors or wearables.
        </p>
        <p>
          At the core of our solution is a <strong>joint-angle tracking</strong>{" "}
          system that monitors the angles between connected joints in real-time.
          We designed a simple yet effective <strong>state machine</strong> over
          these joint-angle features to detect exercise phase changes (e.g., the
          &quot;up&quot; and &quot;down&quot; phases of a squat or bicep curl)
          and automatically count repetitions. This state machine approach helps
          debounce miscounts and ensures accurate tracking across different
          exercise types.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2">Performance & Results</h3>
        <p>
          Through careful optimization, we achieved impressive on-device
          performance:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>
            <strong>~24 FPS</strong> on-device inference (tested on iPhone 12)
          </li>
          <li>
            <strong>~96% rep-count accuracy</strong> across common lifts
            including squats, bicep curls, and shoulder presses
          </li>
          <li>
            Real-time feedback with minimal latency, providing instant visual
            cues to users
          </li>
        </ul>

        <h3 className="font-bold text-lg mt-6 mb-2">Winning the Hackathon</h3>
        <p>
          GymPT won <strong>1st place at the UChicago Class Hackathon</strong>{" "}
          out of 60 participants for Mobile Computing Class. What set our
          project apart was the combination of:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Practical utility:</strong> Addressing a real problem that
            anyone who works out can relate to
          </li>
          <li>
            <strong>Technical sophistication:</strong> Successfully implementing
            real-time computer vision and machine learning on mobile devices
          </li>
          <li>
            <strong>Polished execution:</strong> A fully functional live demo
            with smooth UI/UX that showcased the technology working reliably
            across multiple exercise types
          </li>
          <li>
            <strong>Accessibility focus:</strong> Making advanced fitness
            tracking available to anyone with a smartphone, without requiring
            expensive equipment
          </li>
        </ul>
      </div>
    ),
  },
];
