import {
  IconCircleNumber1,
  IconCircleNumber2,
  IconCircleNumber3,
} from "@tabler/icons-react"
import { ReactNode } from "react"

export type MesocycleType = {
  id: string
  icon: ReactNode
  name: string
  title: string
  concept: string
  description: string
  duration: string
  filter: string
  level: string
  details: {
    title: string
    description?: string
    details: string[]
    section?: {
      title: string
      description?: string
      details: string[]
    }
  }[]
}

export const Mesocycles: MesocycleType[] = [
  {
    id: "1",
    icon: <IconCircleNumber1 color="#6bb8a4" width={48} height={48} />,
    name: "Mesociclo 1",
    concept: "5-in-a-row Concept",
    title: "Master the 5-in-a-row Concept",
    description:
      "This course covers professional playing stances, essential preparatory movements, and effective mobility techniques. It includes drills for shot accuracy, stability management through the Traffic Light Concept, and advanced techniques for enhanced gameplay. Perfect for both beginners and experienced players aiming to refine their skills and elevate their game.",
    duration: "4 - 6 weeks",
    level: "Beginner",
    filter: "mesocycle-1",
    details: [
      {
        title: "Posture",
        description:
          "Learn various professional playing stances and the Arigato Concept for optimal body alignment.",
        details: [
          "Bela, Paquito and Chingotto Postures",
          "Arigato Concept and Scapular Waist",
          "Pros and cons of each style",
        ],
      },
      {
        title: "Preparation",
        description:
          "Master the preparing movements before executing a stroke.",
        details: [
          "Pivot or reaction step (shoulder rotation, waist and hip release)",
          "Adjustment steps",
          "Forehand and backhand shots",
          "Forehand and backhand volleys",
        ],
      },
      {
        title: "Mobility",
        description:
          "Unlock the ability to execute frontal, lateral, regressive, and diagonal movements effectively.",
        details: [
          "Types of movement (forward, lateral, backward and diagonal displacement)",
        ],
        section: {
          title: "Technical Corrections",
          description:
            "Improve shot accuracy with drills, understand stride dynamics, and optimize hand positioning.",
          details: [
            "Superman, spider, boxer postures",
            "Long stride vs. short stride",
            "Shoulder tilt",
            "Lateral distance from hand to center of body",
          ],
        },
      },
      {
        title: "Stability",
        description:
          "Apply the Traffic Light Concept to manage movement stability and control.",
        details: [
          "Traffic Light concept associated with the stop before the shot",
          "Green, Yellow and Red zones",
        ],
        section: {
          title: "Advanced Techniques",
          description:
            "Enhance your game with the Paparazzi Concept, proper body axis rotation, and explosive movements.",
          details: [
            "Paparazzi Concept",
            "Rotation on the body axis",
            "Electrical discharges",
          ],
        },
      },
      {
        title: "Execution",
        description:
          "Perfect your shot completion, understand anatomical rotation, and ensure proper racket positioning at impact.",
        details: [
          "Termination of technical gesture",
          "Anatomy of right and left side rotations",
          "Magnetism theory",
          "Racket position at the point of impact",
        ],
      },
    ],
  },
  {
    id: "2",
    icon: <IconCircleNumber2 color="#6bb8a4" width={48} height={48} />,
    name: "Mesociclo 2",
    concept: "Transversal concepts in aerial and ground game",
    title: "Transversal concepts in aerial and ground game",
    description:
      "Dive deep into the transversal concepts essential for mastering both aerial and ground strokes in padel.",
    level: "Beginner",
    duration: "4 - 6 weeks",
    filter: "mesocycle-2",
    details: [
      {
        title: "Direction",
        description:
          "Master the art of controlling ball direction by perfecting your racquet face positioning, ensuring every shot lands precisely where you intend.",
        details: ["Adapt the face of racket when hitting the ball"],
      },
      {
        title: "Height",
        description:
          "Learn to adjust the height of your shots with finesse, utilizing the tip of your racket to achieve optimal trajectories and control over the ball.",
        details: ["Dictated by the tip of the racket"],
      },
      {
        title: "Depth",
        description:
          "Explore the nuanced range of finish in your strokes to define the depth of your shots.",
        details: ["Range of termination of the shot"],
      },
      {
        title: "Speed",
        description:
          "Dive into a categorization system ranging from 1 to 5 to effectively modulate shot speed, allowing you to adapt to different game situations.",
        details: ["Shot Speed 1 - 5"],
      },
      {
        title: "Acceleration",
        description:
          "Practice making your hand move over the ball quickly to get the most power and spin out of each swing.",
        details: ["Hand over ball concept"],
      },
      {
        title: "Force",
        description:
          "Learn how to use the amplitude of the stroke to make controlled yet forceful shots.",
        details: [
          "Formula: x + 1",
          "Concept of Control (distance from elbow to body)",
        ],
      },
    ],
  },
  {
    id: "3",
    icon: <IconCircleNumber3 color="#6bb8a4" width={48} height={48} />,
    name: "Mesociclo 3",
    concept:
      "Mindset for attack, defense, and counter-attack, the Principle of Equity, Consistency and Speed",
    title:
      "Mindset for attack, defense, and counter-attack, the Principle of Equity, Consistency and Speed",
    description:
      "This section covers key areas including the polarities of technical execution, ensuring your preparation matches the ball's characteristics and racket handling. We will dive into biomechanical movement patterns for attack, defense, and counter-attack, and the interpretation of ball trajectories. It also cover forehand and backhand shots with glass, and techniques for maintaining consistency and controlling shot speeds.",
    level: "Beginner",
    duration: "4 - 6 weeks",
    filter: "mesocycle-3",
    details: [
      {
        title: "Polarities of Technical Execution",
        description: "",
        details: [
          "Positive + Positive (++): The highest level of technical execution, combining optimal positioning and shot quality for maximum effectiveness.",
          "Positive (+): High-quality execution that meets most technical and strategic requirements, though not at the absolute peak.",
          "Neutral (=): Standard execution that maintains the game without significant advantage or disadvantage.",
          "Negative (-): Subpar execution that may result in a compromised position or shot quality, potentially putting you at a disadvantage.",
          "Negative + Negative (--): The lowest level of execution, where poor positioning and shot quality significantly reduce effectiveness.",
        ],
      },
      {
        title: "Technical Preparation Greater Than or Equal to Ball Polarity",
        description:
          "Ensuring your technical preparation meets or exceeds the polarity of the ball, adjusting your stance, grip, and shot execution to match the incoming ball's characteristics for optimal control and response.",
        details: [],
      },
      {
        title: "Racket Handling",
        description:
          "The side and angle of the racket that makes contact with the ball, influencing spin, trajectory, and control.",
        details: [
          "Open Face: The racket is angled upward, typically used for lifting the ball, generating backspin, or executing defensive lobs.",
          "Neutral Face: The racket is perpendicular to the ground, ideal for neutral shots that maintain control and precision.",
          "Closed Face: The racket is angled downward, often used for driving shots, generating topspin, or aggressive attacks.",
        ],
      },
      {
        title: "Biomechanical Movement Patterns",
        description:
          "All Patterns Independent of Positional Zone, movement patterns should be adaptable and effective regardless of the player's position on the court.",
        details: [
          "Attack - Downward Movement Pattern: Utilizing downward movements to generate power and precision in attacking shots, such as smashes or volleys.",
          "Defence - Upward Movement Pattern: Using upward movements to lift the ball defensively, often employed in lobs or high defensive shots.",
          "Counter-Attack - Rectilinear Movement Pattern: Executing straight-line movements to quickly transition from defense to offense, maintaining control and speed.",
        ],
      },
      {
        title: "Ball Reading Interpretation Based on the Parabola Trajectory",
        description:
          "Knowing how to read and interpret the ball's trajectory is crucial to decide what shot to play and where.",
        details: [
          "Ascension Point: The phase where the ball is rising after the bounce, critical for timing defensive and neutral shots.",
          "Maximum Height: The peak of the ball’s trajectory, offering the best opportunity for offensive shots or strategic placements.",
          "Inflection Point: The point where the ball starts descending, crucial for precise timing of counter-attacks or attacking shots",
        ],
      },
      {
        title: "Consistency and Control of the Speedometer",
        description:
          "Adapting shot speed based on position to maintain control and effectiveness.",
        details: [
          "Sector 0 <> Speed 1 and 2: Executing shots at slower speeds, focusing on control and precision in defensive and neutral plays.",
          "Sector 1 <> Speed 2 and 3: Moderate speed shots that balance control and aggression, useful for maintaining rallies and setting up plays.",
          "Sector 2 <> Speed 3 and 4: Faster shots that increase pressure on the opponent, suitable for aggressive plays and finishing points.",
          "Sector 3 <> Speed 4 and 5: Maximum speed shots aimed at overpowering the opponent, requiring high precision and control to avoid errors.",
        ],
      },
    ],
  },
]
