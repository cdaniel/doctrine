import LocalizedStrings from 'react-localization';
// https://www.npmjs.com/package/react-localization


let strings = new LocalizedStrings({
  en: {
    navbarText: 'Assess your organisation!',
    category: "Category",
    doctrine: "Wardley's Doctrine (universally useful patterns that a user can apply)",

    communication: "Communication",
    development: "Development",
    operation: "Operation",
    learning: "Learning",
    leading: "Leading",
    structure: "Structure",

    phaseI: "I - Stop Self-Destructive Behavior",
    knowYourUsers: {
      mainText: "Know your users (e.g. customers, shareholders, regulators, staff)",
      shortText: "Know your users",
      explanations: [
        "Any value we create is through meeting the needs of others. A mantra of \"not sucking as much as the competitors\" is not acceptable. We must be the best we can be.",
        "When mapping a landscape then know who your users are e.g. customers, shareholders, regulators and staff."
      ]
    },
    systematicLearning: {
      mainText: "Use a systematic mechanism of learning (a bias towards data)",
      shortText: "Bias towards data",
      explanations: [
        "The purpose of mapping is not just to create a map and a shared understanding but also to learn climatic patterns, doctrine and context specific play. Maps provide a systematic way of doing this as long as you collate, review and learn from them. Have a bias towards such learning and the use of data.",
        "The governance system must provide a mechanism of consistent measurement against outcomes and for continuous improvement of measurements."
      ]
    },
    highSituationalAwareness: {
      mainText: "Focus on high situational awareness (understand what is being considered)",
      shortText: "Understand what is being considered",
      explanations: [
        "There is a reasonably strong correlation between awareness and performance, so focus on this. Try to understand the landscape that you are competing in and understand any proposals in terms of this. Look before you leap.",
        "A major failing of “Better for Less” was the lack of emphasis on maps. I need to increase situational awareness beyond simple mental models and structures such as ILC. To achieve this, we needed to develop maps within government which requires an anchor (user need), an understanding of position (the value chain and components involved) and an understanding of movement (evolution). To begin with, the proposed governance system needed to clearly reflect user needs in all its decision-making processes. The users include not only departmental users but also the wider public who will interact with any services provided. It was essential, therefore, that those users’ needs were determined at the outset, represented in the creation of any proposal and any expected outcomes of any proposal are set against those needs. But this was not enough, we needed also the value chain that provided those user needs and how evolved the components were. Maps therefore became a critical part of the Governance structure."
      ]
    },
    commonLanguage: {
      mainText: "Use a common language (necessary for collaboration)",
      shortText: "Common language",
      explanations: [
        "Instead of using multiple different ways of explaining the same thing between different functions of the business, we use one - a map. If you can't map what you're doing then don't do it. Situational awareness is not optional.",
        "A necessity for effective collaboration is a common language. Maps allow many people with different aptitudes (e.g. marketing, operations, finance and IT) to work together in order to create a common understanding. Collaboration without a common language is just noise before failure.",
        "The governance system had to provide a mechanism for coordination and engagement across groups including departments and spend control. This requires a mechanism of shared learning – for example, discovery and dissemination of examples of good practice. To achieve this, we must have a common language. Maps were that language."
      ]
    },
    challenge: {
      mainText: "Challenge assumptions (speak up and question)",
      shortText: "Challenge assumptions",
      explanations: [
        "It's a duty for everyone in the company to challenge assumptions. Where possible we use data collated from maps as the purpose of the maps is to expose the thinking. I don't care if it was my pet project, you will openly and honestly tell me why you think I'm wrong. Challenge requires transparency and trust. Any form of retribution or bias against someone for challenging is a deadly sin that will not be forgiven and you will be carted off to work for a competitor. For reference, as the CEO of Fotango, I made my CFO the XO back in 2004. One of his duties was to challenge me and agree / disagree with my choices.",
        "Maps allow for assumptions to be visually exposed. You should encourage challenge to any map with a focus on creating a better map and a better understanding. Don't be afraid of challenge, there is no place for ego if you want to learn."
      ]
    },
    focusOnUserNeeds: {
      mainText: "Focus on user needs",
      explanations: [
        "An essential part of mapping is the anchor of user needs. Ideally you want to create an environment where your needs are achieved by meeting the needs of your users. Be mindful that these needs will evolve due to competition and in the uncharted space they are uncertain. Also, be aware that users may have different and competing needs and be prepared to balance the conflict."
      ]
    },
    removeBiasAndDuplication: {
      mainText: "Remove bias and duplication",
      explanations: [
        "We not only share maps, we collate them in an effort to remove duplication (i.e. rebuilding the same thing) and bias (i.e. custom building that which is a commodity). This is not optional and no, your accounting system is not unique because of the colour of your invoices nor do you have a unique way of purchasing advertising space. We all have a duty to remove duplication and bias in the organisation.",
        "Use multiple maps to help you remove duplication and bias within an organisation. You will often find in any large organisation that there are people custom building what is a commodity or rebuilding something that exists elsewhere. Remember, that they're not doing this because they're daft but because of pre-existing inertia or the lack of any effective communication mechanism i.e. they simply don't know it exists elsewhere. Be warned, the level of duplication within most organisations vastly exceeds any expectations that they might have and you're often treading on the toes of someone's pet project. Large distributed companies often talk about duplication in the single digits e.g. we have six enterprise content management systems. They tend to react poorly when it is \"discovered\" that they have hundreds or even \"thousands\". People can get very defensive in this space"
      ]
    },
    thinkSmallDetails: {
      mainText: "Think small (as in know the details)",
      shortText: "Know the details",
      explanations: [
        "Know the details, use small teams and break large landscapes into small contracts. Don't be chased away by fears of complexity of management or \"too many interfaces to manage\"."
      ]
    },
    methods: {
      mainText: "Use appropriate methods (e.g. agile vs lean vs six sigma)",
      shortText: "Use appropriate methods",
      explanations: [
        "anyone suggesting we should be all agile, all lean or all six sigma will get a right good talking to without the cake. Same with others suggesting one size fits all purchasing methods.",
        "Try to avoid the tyranny of one. Understand that there is no magic solution and that you have to use multiple methods  (e.g. agile or lean or six sigma) as appropriate. In any large system, multiple methods may be used at the same time. Be mindful of ego here, tribes can form with almost religious fervour about the righteousness of their method.",
        "Governance had to accept that there are currently no single methods of management that are suitable for all environments. The use of multiple methods and techniques based upon context had to become a norm."
      ]
    },

    phaseII: "II - Become More Context Aware",
    beTransparent: {
      mainText: "Be transparent (a bias towards open)",
      shortText: "A bias towards open",
      explanations: [
        "We don't hide our maps, we share them and allow others to challenge and question our assumptions. The act of sharing is essential because it helps us to learn. Transparency also requires us to remove all the noise, the pointless gibberish that gets in the way of learning. Anyone not willing to learn, will forgo the slice of cake and be helped to find a new job with a competitor.",
        "Have a bias towards openness within your organisation. If you want to effectively learn about the landscape then you need to share your maps with others and allow them to add their wisdom and their challenge to the process. Building maps in secret in your organisations is a surefire way of having a future meeting where somebody points out the blindingly obvious thing you have missed.",
        "The governance system had to be entirely transparent. For example, proposals must be published openly in one place and in one format through a shared and public pipeline. This must allow for examination of proposals both internally and externally of Government to encourage interaction of departments and public members to any proposal."
      ]
    },
    moveFast: {
      mainText: "Move fast (an imperfect plan executed today is better than a perfect plan executed tomorrow)",
      shortText: "Move fast",
      explanations: [
        "The speed at which you move around the cycle is important. There is little point implementing FIRE like principles in developing a system if it takes you a year to make decision to act. An imperfect plan executed today is better than a perfect plan executed tomorrow.",
        "We understood that there would be inertia to the changes we were proposing and that existing culture and structures could well rise to combat us. We put in place an initial concept of work streams that targeted different areas. The idea was that if we ever put this in place then we’d have 100 days or so to make the changes before resistance overwhelmed us."
      ]
    },
    bePragmatic: {
      mainText: "Be pragmatic (it doesn't matter if the cat is black or white as long as it catches mice)",
      shortText: "Be pragmatic",
      explanations: [
        "Focus on meeting the user needs and simplify as much as possible. There will always be edge cases or a way to make something more perfect nut but if what you're building could use a component that already exists then try to avoid the urge to re-invent it. If you're a taxi company then investing your funds into making that perfect tyre will not help your business. Always challenge when you depart from using something that already exists. The old adage of \"It doesn’t matter if the cat is black or white as long as it catches mice\" is relevant here.",
        "We accepted that not everything would fit into the structure or work streams that we had described. A majority would and it was the cost reduction and improvement in those cases that would generate the most savings. However, it was important to acknowledge that a one-size fits all approach would not work and will be vulnerable to inertia. Pragmatism to achieve the change was more important than ideology. We also had to maintain the existing IT estate whilst acknowledging the future will require a fundamentally different approach based upon agile, open and effective local delivery. We would have to not only audit but sweat the existing assets until they could be replaced."
      ]
    },
    thinkFast: {
      mainText: "Think fast, inexpensive, restrained and elegant (FIRE, formerly FIST)",
      shortText: "Think fast, inexpensive, restrained and elegant",
      explanations: [
        "Ok, Dan Ward might say FIRE (and do go buy his book) but I'll stick with his original terms. You will move quickly with a bias towards action, you will use inexpensive components and be frugal wherever possible, you will simplify the problem as much as possible and you will build in small components ... otherwise you WILL not build.",
        "Break large systems down into small components, use and re-use inexpensive components where possible, constrain budgets and time, build as simply and as elegantly as possible.",
        "Governance should encourage an approach of fast, inexpensive, simple and tiny rather than creation of slow, expensive, complex and large systems to achieve value for money. Any reasonably large technology proposal should be broken down into smaller components with any in-house development achieved through small teams. The breaking down of large systems would also help demonstrate that multiple methods were usually needed along with encouraging re-use. However, we should be prepared for inertia and counter arguments such as the “complexity of managing interfaces”. The interfaces existed regardless of whether we tried to ignore them or not."
      ]
    },
    focusOutcome: {
      mainText: "Focus on the outcome not a contract (e.f. worth based development)",
      shortText: "Focus on the outcome",
      explanations: [
        "When using contracts then try to focus on the outcome and what you're trying to achieve rather than the contract itself.  Realise that different types of contract will be needed e.g. outsourced or time and material based or worth based development. Along with a focus on outcomes, try and keep contracts constrained in terms of time and budget."
      ]
    },
    appropriateTools: {
      mainText: "Use appropriate tools (e.g. mapping, financial models)",
      shortText: "Use appropriate tools",
      explanations: [

      ]
    },
    manageInertia: {
      mainText: "Manage inertia (e.g. existing practice, political capital, previous investment)",
      shortText: "Manage inertia",
      explanations: [
        "We all have it. It's caused by past success. You will realise that you have it. There are about sixteen different forms and you will learn how to recognise this. When you find yourself saying \"but this is how we do it\" or \"but this has always worked in the past\" or \"don't fiddle with the machine as it ain't broke\" then you will question why you are saying this. If someone is challenging what is being done then you will LISTEN and you will ask why you are responding in such a way.",
        "At some point you will face inertia to change e.g. existing practice, political capital or previous investment. Try and understand the root cause. Ideally use a map to anticipate before you encounter and hence have prepared solutions & counter arguments. If possible, use the maps to enable people to discover their own inertia."
      ]
    },
    effectivenessOverEfficiency: {
      mainText: "Effectiveness over efficiency",
      explanations: [
        "Whilst optimising flow is important, be careful not to waste valuable time making the ineffective more efficient. Understand the landscape and how it is changing before you attempt to optimise flow. Remove the ineffective before you focus on efficiency.",
        "In any system there is risk. Use the maps where possible to help you understand failure modes, what can go wrong and what will be impacted if a component fails. Try where possible to mitigate risks by distributing systems, by designing for failure and by the constant introduction of failure (use of chaos engines such as Netflix's chaos monkey). Mitigate against known failure modes such as building large scale (death star) like efforts."
      ]
    },
    thinkAptitudeAndAttitude: {
      mainText: "Think aptitude and attitude",
      explanations: [
        "Each team may contain discrete skills (e.g. networks, marketing, engineering, finance) known as aptitudes. But each aptitude has an attitude i.e. the culture, methods and techniques for agile development of an entirely novel act are not the same as those for building a highly industrialised component. When determining composition of team, it is a duty to consider not only the aptitude but the attitude. The combination of both is what we call capability.",
        "Understand that people not only have aptitudes (e.g. finance, engineering, operations and marketing) but different attitudes (pioneer, settler and town planner). The mindsets are different."
      ]
    },
    thinkSmallTeam: {
      mainText: "Think small (as in teams)",
      shortText: "Think small teams",
      explanations: [
        "Everything must be broken down into small teams. As a guide, when exploring the uncharted space a team of 3-5 seems appropriate. When building a product / service capability then two pizza (i.e. 12) seems more apt. When providing an industrialised component then a larger team can be argued for. Under no circumstances will that team size approach anything close to the Dunbar number. Anything larger than 40 should be considered as highly dubious and an immediate candidate for dividing into smaller teams based upon user needs.",

      ]
    },
    standards: {
      mainText: "Use standards where appropriate",
      shortText: "Use standards",
      explanations: [
        "NB anyone suggesting we should build our own cloud service where a defacto service exists runs the risk of getting hauled up in front of company as the person trying to spend the entire cake budget on a vanity project. Unless you can clearly show you can out industrialise and make more of a commodity whatever exists, then use it.",
        "If something is industrialised and if standards exist then try to use them. There's always a temptation to build a better standard but try to avoid this or building layers on top of other \"standards\" unless you have an extremely compelling reason to do so. If you need a toaster, buy a toaster and don't try building one from scratch."
      ]
    },
    failure: {
      mainText: "Manage failure",
      explanations: [
        "In any system there is risk. Use the maps where possible to help you understand failure modes, what can go wrong and what will be impacted if a component fails. Try where possible to mitigate risks by distributing systems, by designing for failure and by the constant introduction of failure (use of chaos engines such as Netflix's chaos monkey). Mitigate against known failure modes such as building large scale (death star) like efforts."
      ]
    },
    iterativeStrategy: {
      mainText: "Strategy is iterative not linear (fast reactive cycles)",
      shortText: "Strategy is iterative",
      explanations: [
        "This is for anyone thinking of writing long winded strategy documents, target operating models and step by step plans of how the future will be. Immediately book an appointment with HR. You are a valuable asset for the company particularly if we can deploy you within a competitor. HR will help you find a strategy position in a competitor and you will be given glowing references especially about how sad we are to lose you. We might even try to put up a \"fight\" to encourage the competitor to think you're an attractive acquisition. We will even pay you to join them. Instead of long winded plans, we will have direction towards a position and adapt as needed. We will \"cross the river by feeling the stones\".",
        "Understand that strategy is iterative. You need to adapt in fast cycles according to the changing environment. The best you can hope for is a direction, a constant process of learning and improvement of your gameplay along the way."
      ]
    },
    action: {
      mainText: "A bias towards action (learn by playing the game)",
      shortText: "A bias towards action",
      explanations: [
        "Common economic patterns and context specific forms of gameplay are discovered by playing the game. Hence strategic choices must be made by those who play the game and strategy developed internally and not externally. We must also share what we've learned (hence again, maps and the purpose of collating them). Hiring strategy consultants to write documents telling us what to do will get a another good yelling at and absolutely no cake whatsoever. Certainly use outsiders to learn context specific forms of gameplay but we're the ones playing the game.",
        "Do not attempt to create the perfect map. Have a bias towards action because the landscape will change and you will discover more through action. You learn by playing the game.",

      ]
    },
    distributePower: {
      mainText: "Distribute power and decision making",
      explanations: [
        "Have a bias towards distributing power from the centre including yourself. Put power in the hands of those who are closest to the choices that need to be made.",
        "Departments and groups should be able organize themselves as appropriate to meet central policy. Hence the governance procedure should refrain from directly imposing project methodologies and structure on departments and groups and allow for autonomous decision making. Improvements to ways of operating could be achieved through challenging via maps i.e. if one department thought that everything should be outsourced, we could use their own maps to help them challenge their own thinking."
      ]
    },

    phaseIII: "III - Better for Less",
    purpose: {
      mainText: "Provide purpose, mastery & autonomy",
      explanations: [
        "Each team shall be autonomous within the confines of what it is supposed to do (described by a fitness function). Each team will therefore own what it does. Each team shall be able to see how they fit into the whole (hence maps) and develop mastery in both aptitude and attitude.",
        "Provide people with purpose (including a moral imperative and a scope) for action. Enable them to build mastery in their chosen area and give them the freedom (& autonomy) to act."
      ]
    },
    exceptionalStandards: {
      mainText: "Set exceptional standards (great is just not good enough)",
      shortText: "Set exceptional standards",
      explanations: [
        "Don't settle for as good as or slightly better than competitors. Always strive for the very best that can be achieved."
      ]
    },
    direction: {
      mainText: "Commit to the direction, be adaptive along the path (crossing the river by feeling the stones)",
      shortText: "Commit to the direction",
      explanations: [
        "Once you've set a direction commit to it. There will often be hurdles and obstacles but don't just simply abandon a direction because a single step is challenging. Try to find paths around the obstacles. If you're building a system and a common component is not as expected then that can often prove a market opportunity."
      ]
    },
    biasTowardsNew: {
      mainText: "A bias towards the new (be curious, take appropriate risks)",
      shortText: "A bias towards the new",
      explanations: [
        "Whatever you do will evolve. So have a bias towards the new, be curious and take appropriate risks. Be willing to experiment.",
        "We focused on an outside-in approach to innovation where change was driven and encouraged at the local level through seed funds rather than Government trying to force its own concept of change through “big IT”. The role of central Government was reduced to providing engineering expertise, an intelligent customer function to challenge what was done, industrialised component services, encouragement of change and showing what good looked like."
      ]
    },
    betterWithLess: {
      mainText: "Do better with less (continual improvement)",
      shortText: "Do better with less",
      explanations: [
        "Have a bias towards continual improvement.",
        "Such an approach had to be transparent and measured in terms of cost. It had to provide challenge for what was currently being built. From this we developed the idea of a scrutiny board which later became spend control under OCTO. It wasn’t enough to simply reduce spending; our focus was on dramatically reducing waste whilst improving public services. We couldn’t do this without measurement. We understood that this would not be a big bang approach but an iterative process – a constant cycle of doing better with less. To this end, we proposed the use of open data with a focus on the Government becoming more transparent. We also added the use of open source including the practices associated with it and the use of open standards to drive competitive markets."
      ]
    },
    optimiseFlow: {
      mainText: "Optimise flow (remove bottlenecks)",
      shortText: "Optimise flow",
      explanations: [
        "Whether it is with what we build or how, we are required to remove bottlenecks and improve throughput where possible. However, care must be taken not to make the ineffective more efficient rather than making the ineffective more effective - hence the importance of situational awareness. Anything which gets in the way of meeting user needs, being fast, transparency on relevant information will be treated ruthlessly and for the guillotine e.g. corporate expense processes. Hint, it's usually way more effective to just to give everyone company credit cards, say \"spend in the interest of the company\" and get accounts to sort through the credit card bills rather than having staff fill out expense forms.",
        "Within a map there will be many flows of capital - whether information, risk, social or financial. Try to optimise this and remove bottlenecks."
      ]
    },
    thinkBig: {
      mainText: "Think big (inspire others, provide direction)",
      shortText: "Inspire others",
      explanations: [
        "Whilst the actions you take, the way that you organise and the focus on detail requires you to think small when it comes to inspiring others, providing direction and moral imperative then think big. Your purpose is not to defend the narrow pass of Thermopylae but instead to defeat the Persian army and save the Greek states.",
        "We need to get out of the mindset of thinking about specific systems and tackle the whole problem. We needed to break away from these isolated individual systems. We needed to change the default delivery mechanism for public services towards online services using automated processes for most citizens. We needed an approached that focused relentlessly on delivery to the citizen and their needs."
      ]
    },
    beHumble: {
      mainText: "Be humble (listen, be selfless, have fortitude)",
      shortText: "Be humble",
      explanations: [
        "Listen to others, be selfless, have fortitude and be humble. Inspire others by who you are and what you do. There are many ways to manipulate the landscape e.g. through marketing, persuading others that what is a commodity is somehow different or that a product is unique to them. But these manipulations come with a cost not just externally but internally. We can start to believe our own hype, our own infallibility and our \"right\" to the market."
      ]
    },
    beOwner: {
      mainText: "Be the owner (take responsibility)",
      shortText: "Be the owner",
      explanations: [
        "Take responsibility for your environment, your actions within it and how you play the game. You could outsource this to a third party in the way a chess player could outsource their gameplay to another but you won't learn and it is still you that loses."
      ]
    },
    complexStrategy: {
      mainText: "Strategy is complex (embrace uncertainty)",
      shortText: "Embrace uncertainty",
      explanations: [
        "There will be uncertainty, emerging patterns and surprises along the way. That's the very nature of competition due to the involvement of other actors. Embrace this, don't fall for the temptation that you can plan the future. What matters is not the plan but the preparation and your ability to adapt."
      ]
    },
    seekTheBest: {
      mainText: "Seek the best",
      explanations: [
        "Try to find and grow the best people with the best aptitude and attitude for their roles. Invest in keeping them. Don't force them into becoming something they're not. It's perfectly reasonable for a truly gifted systems tester who excels in a town planning world of massively complicated and automated systems to be paid more than the project manager. What you want to avoid is taking exceptional people out of their role and putting them into something they are not suited to simply because they think that is the only way to progress. Leadership, management and engineering are all aptitudes, they are all valuable and they have to work in concert. If the hierarchy of your organisation uniformly reflects your pay scales then you're likely to be draining talent from where it should be and putting it into roles that it is not suited for. This is often done for arguments of \"responsibility\" or \"managing bigger teams\" (which also causes people to try and accumulate empires) or \"spreading experience\" or \"career path\" but there are alternative ways of achieving this than taking a gifted engineer and turning them into a mediocre project manager. This is probably one of the most difficult areas as ego is quickly encountered."
      ]
    },

    phaseIV: "IV - Continuously Evolve",
    landscape: {
      mainText: "Exploit the landscape",
      explanations: [
        "Use the landscape to your advantage, there are often powerful force multipliers. You might decide not to take advantage of a competitor or a change in the market but that should be a conscious choice."
      ]
    },
    noCore: {
      mainText: "There is no core (everything is transient)",
      shortText: "There is no core",
      explanations: [
        "Everything is transient, whatever you think is core to your company won't be at some point in the future. The only things that are truly static are dead."
      ]
    },
    ecosystem: {
      mainText: "Listen to your ecosystem (acts as a future sensing engine)",
      shortText: "Listen to your ecosystem",
      explanations: [
        "There are many different forms of ecosystems and ways to exploit them. These can be powerful sensing engines (e.g. the ILC model) for future change as well as sources of co-operation with others along with defensive and offensive alliances. But ecosystems need management, they need tending as a gardener tends a garden - sometimes you allow them to grow wild, sometime you harvest, sometimes you help direct or constrain them. These are particular skills that you can develop but most important is the principle - listen to them.",
        "We viewed the existing centralized approach as problematic because it was often remote from the real needs of either public service employees, intermediaries or citizens alike. We envisaged a new engineering group that would work in the field and spot and then nurture opportunities for change at the frontline, working closely with service delivery providers."
      ]
    },
    noOneCulture: {
      mainText: "There is no one culture (e.g. pioneers, settlers and town planners)",
      shortText: "No single culture",
      explanations: [
        "Understand that a company which plans for longevity needs to cope with not only the discovery of uncharted components but the use of the industrialised and the transition between these two extremes. You will need different attitudes. You will therefore create many cultures in your organisation e.g. pioneers, settlers and town planners have different cultures. This is not a negative and don't try to grind everyone into a single bland culture. It will not make them happy."
      ]
    },
    constantEvolution: {
      mainText: "Design for constant evolution",
      explanations: [
        "Whilst a team might become a semi permanent structure, the work it undertakes will evolve. It is therefore a duty to ensure that work evolves through the organisation e.g. a pioneering team discovers an uncharted space, a team of settlers take the work and productise it hence forcing the pioneers to move on. A team of town planners then industrialise the product when appropriate forcing the settlers to move on.",
        "Create an organisational system which copes with the constant ebb and flow in the landscape. Ideally, changes should flow through your organisation without the needed for constant restructuring. A cell based structure using a system of theft with pioneers, settlers and town planners is one such system."
      ]
    },
  },
  fr: {
    navbarText: 'Évaluez votre organisation !',
    category: "Catégorie",
    doctrine: "Doctrine de Wardley (des modèles universellement utiles qu'un utilisateur peut appliquer)",

    communication: "Communication",
    development: "Développement",
    operation: "Opération",
    learning: "Apprentissage",
    leading: "Dirigeant",
    structure: "Structure",

    phaseI: "I - Éliminer les pratiques contreproductives",
    knowYourUsers: {
      mainText: "Connaître vos utilisateurs (par ex. clients, actionnaires, régulateurs, personnel)",
      shortText: "Connaître vos utilisateurs",
      explanations: [
        "Toute valeur que nous créons passe par la satisfaction des besoins d'autrui. Un mantra du type \"ne pas être aussi mauvais que les concurrents\" n'est pas acceptable. Nous devons être les meilleurs que nous pouvons être.",
        "Lorsque vous cartographiez un paysage, vous devez savoir qui sont vos utilisateurs, par ex. clients, actionnaires, régulateurs et personnel."
      ]
    },
    systematicLearning: {
      mainText: "Utiliser un mécanisme d'apprentissage systématique (un biais vers les données)",
      shortText: "Biais vers les données",
      explanations: [
        "Le but de la cartographie n'est pas simplement de créer une carte et une compréhension partagée mais aussi d'apprendre des modèles climatiques, des doctrines et des jeux contextuels spécifiques. Les cartes fournissent une méthode systématique pour le faire tant que vous les rassemblez, les examinez et en apprenez. Ayez un biais vers cet apprentissage et l'utilisation des données.",
        "Le système de gouvernance doit fournir un mécanisme de mesure cohérente des résultats et d'amélioration continue des mesures."
      ]
    },
    highSituationalAwareness: {
      mainText: "Se concentrer sur une grande conscience situationnelle (comprendre ce qui est envisagé)",
      shortText: "Comprendre ce qui est envisagé",
      explanations: [
        "Il existe une corrélation assez forte entre la conscience et la performance, alors concentrez-vous là-dessus. Essayez de comprendre le paysage dans lequel vous êtes en concurrence et comprenez toute proposition en termes de cela. Regardez avant de sauter.",
        "Un échec majeur de « Mieux pour Moins » a été le manque de mise en valeur des cartes. Il fallait augmenter la conscience situationnelle au-delà de simples modèles mentaux et de structures comme l'ILC. Pour ce faire, nous devions développer des cartes au sein du gouvernement, ce qui nécessite une ancre (besoin de l'utilisateur), une compréhension de la position (la chaîne de valeur et les composants impliqués) et une compréhension du mouvement (évolution). Pour commencer, le système de gouvernance proposé devait clairement refléter les besoins des utilisateurs dans tous ses processus de prise de décision. Les utilisateurs incluent non seulement les utilisateurs des départements mais aussi le grand public qui interagira avec les services fournis. Il était donc essentiel que les besoins de ces utilisateurs soient déterminés dès le départ, représentés dans la création de toute proposition et que tous les résultats attendus de toute proposition soient fixés par rapport à ces besoins. Mais cela ne suffisait pas, il fallait également la chaîne de valeur qui fournissait ces besoins utilisateurs et comment les composants étaient évolués. Les cartes sont donc devenues une partie critique de la structure de gouvernance."
      ]
    },
    commonLanguage: {
      mainText: "Utiliser un langage commun (nécessaire à la collaboration)",
      shortText: "Langage commun",
      explanations: [
        "Au lieu d'utiliser plusieurs façons différentes d'expliquer la même chose entre différentes fonctions de l'entreprise, nous en utilisons une seule - une carte. Si vous ne pouvez pas cartographier ce que vous faites, ne le faites pas. La conscience situationnelle n'est pas optionnelle.",
        "Un besoin essentiel pour une collaboration efficace est un langage commun. Les cartes permettent à de nombreuses personnes de différentes aptitudes (par ex. marketing, opérations, finances et IT) de travailler ensemble afin de créer une compréhension commune. La collaboration sans un langage commun n'est que du bruit avant l'échec.",
        "Le système de gouvernance devait fournir un mécanisme de coordination et d'engagement entre les groupes, y compris les départements et le contrôle des dépenses. Cela nécessite un mécanisme d'apprentissage partagé – par exemple, la découverte et la diffusion d'exemples de bonnes pratiques. Pour y parvenir, nous devons avoir un langage commun. Les cartes étaient ce langage."
      ]
    },
    challenge: {
      mainText: "Remettre en question les hypothèses (parlez et posez des questions)",
      shortText: "Remettre en question les hypothèses",
      explanations: [
        "C'est un devoir pour tout le monde dans l'entreprise de remettre en question les hypothèses. Dans la mesure du possible, nous utilisons les données collectées à partir des cartes car le but des cartes est de révéler la réflexion. Je me fiche si c'était mon projet de favori, vous me direz ouvertement et honnêtement pourquoi vous pensez que j'ai tort. Le défi nécessite transparence et confiance. Toute forme de représailles ou de partialité contre quelqu'un pour avoir défié est un péché mortel qui ne sera pas pardonné et vous serez cartonné pour travailler chez un concurrent. Pour référence, en tant que PDG de Fotango, j'ai nommé mon directeur financier comme adjoint en 2004. Une de ses fonctions était de me défier et d'être d'accord / de ne pas être d'accord avec mes choix.",
        "Les cartes permettent de révéler les hypothèses de manière visuelle. Vous devriez encourager le défi de toute carte en vous concentrant sur la création d'une meilleure carte et d'une meilleure compréhension. N'ayez pas peur du défi, il n'y a pas de place pour l'ego si vous voulez apprendre."
      ]
    },
    focusOnUserNeeds: {
      mainText: "Se concentrer sur les besoins des utilisateurs",
      explanations: [
        "Une partie essentielle de la cartographie est l'ancrage des besoins des utilisateurs. Idéalement, vous souhaitez créer un environnement où vos besoins sont atteints en répondant aux besoins de vos utilisateurs. Soyez conscient que ces besoins évolueront en raison de la concurrence et dans l'espace inexploré ils sont incertains. Soyez également conscient que les utilisateurs peuvent avoir des besoins différents et concurrents et soyez prêt à équilibrer le conflit."
      ]
    },
    removeBiasAndDuplication: {
      mainText: "Supprimer les biais et la duplication",
      explanations: [
        "Nous ne partageons pas seulement des cartes, nous les rassemblons dans le but de supprimer la duplication (c'est-à-dire reconstruire la même chose) et les biais (c'est-à-dire construire sur mesure ce qui est une commodité). Ce n'est pas optionnel et non, votre système comptable n'est pas unique à cause de la couleur de vos factures et vous n'avez pas une manière unique d'acheter de l'espace publicitaire. Nous avons tous le devoir de supprimer la duplication et les biais dans l'organisation.",
        "Utilisez plusieurs cartes pour vous aider à supprimer la duplication et les biais au sein d'une organisation. Vous trouverez souvent dans toute grande organisation des personnes fabriquant sur mesure ce qui est une commodité ou reconstruisant quelque chose qui existe ailleurs. Souvenez-vous, qu'elles ne font pas cela parce qu'elles sont idiotes mais à cause de l'inertie préexistante ou du manque de tout mécanisme de communication efficace, c'est-à-dire qu'elles ne savent tout simplement pas que cela existe ailleurs. Attention, le niveau de duplication au sein de la plupart des organisations dépasse largement toutes les attentes qu'elles pourraient avoir et vous marchez souvent sur les orteils de quelqu'un projet de favori. Les grandes entreprises distribuées parlent souvent de duplication en chiffres uniques, par exemple nous avons six systèmes de gestion de contenu d'entreprise. Elles réagissent mal lorsque il est \"découvert\" qu'elles en ont des centaines, voire des \"milliers\". Les gens peuvent devenir très défensifs dans cet espace."
      ]
    },
    thinkSmallDetails: {
      mainText: "Penser petit (comme dans connaître les détails)",
      shortText: "Connaître les détails",
      explanations: [
        "Connaissez les détails, utilisez de petites équipes et divisez les grands paysages en petits contrats. Ne vous laissez pas effrayer par la complexité de la gestion ou par \"trop d'interfaces à gérer\"."
      ]
    },
    methods: {
      mainText: "Utiliser des méthodes appropriées (par ex. agile vs lean vs six sigma)",
      shortText: "Utiliser des méthodes appropriées",
      explanations: [
        "Toute personne suggérant que nous devrions être complètement agiles, complètement lean ou complètement six sigma recevra une bonne discussion sans gâteau. Même chose avec d'autres suggérant une méthode d'achat unique pour tous.",
        "Essayez d'éviter la tyrannie de l'unité. Comprenez qu'il n'y a pas de solution magique et que vous devez utiliser plusieurs méthodes (par ex. agile ou lean ou six sigma) selon les besoins. Dans tout grand système, plusieurs méthodes peuvent être utilisées en même temps. Soyez attentif à l'ego ici, des tribus peuvent se former avec une ferveur presque religieuse à propos de la justesse de leur méthode.",
        "La gouvernance devait accepter qu'il n'y ait actuellement aucune méthode de gestion unique qui convienne à tous les environnements. L'utilisation de plusieurs méthodes et techniques en fonction du contexte devait devenir une norme."
      ]
    },

    phaseII: "II - Devenir Plus Conscient du Contexte",
    beTransparent: {
      mainText: "Soyez transparent (un biais vers l'ouverture)",
      shortText: "Un biais vers l'ouverture",
      explanations: [
        "Nous ne cachons pas nos cartes, nous les partageons et permettons aux autres de défier et de questionner nos hypothèses. L'acte de partage est essentiel car il nous aide à apprendre. La transparence exige également que nous supprimions tout le bruit, le charabia inutile qui gêne l'apprentissage. Toute personne ne souhaitant pas apprendre, renoncera à une part de gâteau et sera aidée à trouver un nouvel emploi chez un concurrent.",
        "Ayez un biais vers l'ouverture au sein de votre organisation. Si vous souhaitez apprendre efficacement sur le paysage, vous devez partager vos cartes avec les autres et leur permettre d'ajouter leur sagesse et leur défi au processus. Créer des cartes en secret dans vos organisations est un moyen sûr d'avoir une future réunion où quelqu'un vous signalera la chose évidente que vous avez manquée.",
        "Le système de gouvernance devait être entièrement transparent. Par exemple, les propositions devaient être publiées ouvertement en un seul endroit et en un seul format par le biais d'un pipeline partagé et public. Cela devait permettre l'examen des propositions à la fois en interne et en externe du gouvernement pour encourager l'interaction des départements et des membres du public avec toute proposition."
      ]
    },
    moveFast: {
      mainText: "Bougez rapidement (un plan imparfait exécuté aujourd'hui vaut mieux qu'un plan parfait exécuté demain)",
      shortText: "Bougez rapidement",
      explanations: [
        "La vitesse à laquelle vous vous déplacez dans le cycle est importante. Il ne sert à rien de mettre en œuvre des principes FIRE lors du développement d'un système s'il vous faut un an pour prendre la décision d'agir. Un plan imparfait exécuté aujourd'hui vaut mieux qu'un plan parfait exécuté demain.",
        "Nous avons compris qu'il y aurait de l'inertie aux changements que nous proposions et que la culture et les structures existantes pourraient bien se dresser contre nous. Nous avons mis en place un concept initial de flux de travail ciblant différentes zones. L'idée était que si nous mettions cela en place, nous aurions environ 100 jours pour effectuer les changements avant que la résistance ne nous submerge."
      ]
    },
    bePragmatic: {
      mainText: "Soyez pragmatique (peu importe si le chat est noir ou blanc tant qu'il attrape les souris)",
      shortText: "Soyez pragmatique",
      explanations: [
        "Concentrez-vous sur la satisfaction des besoins des utilisateurs et simplifiez autant que possible. Il y aura toujours des cas particuliers ou une façon de rendre quelque chose de plus parfait, mais si ce que vous construisez pourrait utiliser un composant existant, essayez d'éviter l'envie de le re-inventer. Si vous êtes une entreprise de taxis, investir vos fonds pour créer le pneu parfait ne vous aidera pas. Remettez toujours en question lorsque vous vous éloignez de l'utilisation de quelque chose qui existe déjà. Le vieil adage de \"Peu importe si le chat est noir ou blanc tant qu'il attrape les souris\" est pertinent ici.",
        "Nous avons accepté que tout ne correspondrait pas à la structure ou aux flux de travail que nous avions décrits. Une majorité le ferait et c'est la réduction des coûts et l'amélioration dans ces cas qui généreraient le plus d'économies. Cependant, il était important de reconnaître qu'une approche unique ne fonctionnerait pas et serait vulnérable à l'inertie. Le pragmatisme pour atteindre le changement était plus important que l'idéologie. Nous devions également maintenir le parc informatique existant tout en reconnaissant que l'avenir nécessiterait une approche fondamentalement différente basée sur l'agilité, l'ouverture et une livraison locale efficace. Nous devrions non seulement auditer mais exploiter les actifs existants jusqu'à ce qu'ils puissent être remplacés."
      ]
    },
    thinkFast: {
      mainText: "Penser rapide, peu coûteux, retenu et élégant (FIRE, anciennement FIST)",
      shortText: "Penser rapide, peu coûteux, retenu et élégant",
      explanations: [
        "D'accord, Dan Ward pourrait dire FIRE (et achetez son livre) mais je vais m'en tenir à ses termes originaux. Vous bougerez rapidement avec un biais vers l'action, vous utiliserez des composants peu coûteux et serez frugal autant que possible, vous simplifierez le problème autant que possible et vous construirez en petits composants ... sinon vous NE construirez pas.",
        "Décomposez les grands systèmes en petits composants, utilisez et réutilisez des composants peu coûteux autant que possible, contraignez les budgets et le temps, construisez aussi simplement et élégamment que possible.",
        "La gouvernance devrait encourager une approche rapide, peu coûteuse, simple et minuscule plutôt que la création de systèmes lents, coûteux, complexes et grands pour atteindre la valeur de l'argent. Toute proposition technologique raisonnablement grande devrait être décomposée en composants plus petits avec tout développement interne réalisé par de petites équipes. La décomposition des grands systèmes aiderait également à démontrer que plusieurs méthodes étaient habituellement nécessaires, tout en encourageant la réutilisation. Cependant, nous devrions nous préparer à l'inertie et aux contre-arguments tels que la \"complexité de la gestion des interfaces\". Les interfaces existaient, que nous essayions de les ignorer ou non."
      ]
    },
    focusOutcome: {
      mainText: "Concentrez-vous sur le résultat, pas sur un contrat (par ex. développement basé sur la valeur)",
      shortText: "Concentrez-vous sur le résultat",
      explanations: [
        "Lorsque vous utilisez des contrats, essayez de vous concentrer sur le résultat et ce que vous essayez d'atteindre plutôt que sur le contrat lui-même. Réalisez que différents types de contrats seront nécessaires, par ex. externalisé ou basé sur le temps et les matériaux ou le développement basé sur la valeur. En plus de se concentrer sur les résultats, essayez de garder les contrats contraints en termes de temps et de budget."
      ]
    },
    appropriateTools: {
      mainText: "Utilisez des outils appropriés (par ex. cartographie, modèles financiers)",
      shortText: "Utilisez des outils appropriés",
      explanations: [] // Pas de traduction nécessaire car aucun texte fourni
    },
    manageInertia: {
      mainText: "Gérez l'inertie (par ex. pratique existante, capital politique, investissement précédent)",
      shortText: "Gérez l'inertie",
      explanations: [
        "Nous en avons tous. C'est causé par le succès passé. Vous réaliserez que vous en avez. Il y a environ seize formes différentes et vous apprendrez à les reconnaître. Lorsque vous vous surprenez à dire \"mais c'est comme ça que nous faisons\" ou \"mais cela a toujours fonctionné dans le passé\" ou \"ne touchez pas à la machine car elle n'est pas cassée\", vous vous demanderez pourquoi vous dites cela. Si quelqu'un remet en question ce qui est fait, vous ÉCOUTEREZ et vous vous demanderez pourquoi vous réagissez de cette manière.",
        "À un moment donné, vous ferez face à l'inertie du changement, par ex. pratique existante, capital politique ou investissement précédent. Essayez de comprendre la cause principale. Idéalement, utilisez une carte pour anticiper avant de rencontrer l'inertie et avoir ainsi des solutions et des contre-arguments prêts. Si possible, utilisez les cartes pour permettre aux gens de découvrir leur propre inertie."
      ]
    },
    effectivenessOverEfficiency: {
      mainText: "Efficacité avant efficacité",
      explanations: [
        "Bien que l'optimisation du flux soit importante, faites attention à ne pas perdre un temps précieux à rendre plus efficace ce qui est inefficace. Comprenez le paysage et comment il change avant de tenter d'optimiser le flux. Supprimez l'inefficace avant de vous concentrer sur l'efficacité.",
        "Dans tout système, il y a des risques. Utilisez les cartes chaque fois que possible pour vous aider à comprendre les modes de défaillance, ce qui peut mal tourner et ce qui sera impacté si un composant échoue. Essayez autant que possible de réduire les risques en distribuant les systèmes, en les concevant pour qu'ils puissent échouer et en introduisant constamment des défaillances (utilisation de moteurs de chaos comme le chaos monkey de Netflix). Atténuez les modes de défaillance connus tels que la construction d'efforts à grande échelle (type Étoile de la mort)."
      ]
    },
    thinkAptitudeAndAttitude: {
      mainText: "Pensez aptitude et attitude",
      explanations: [
        "Chaque équipe peut contenir des compétences distinctes (par ex. réseaux, marketing, ingénierie, finance) appelées aptitudes. Mais chaque aptitude a une attitude, c’est-à-dire que la culture, les méthodes et les techniques pour le développement agile d'un acte entièrement nouveau ne sont pas les mêmes que celles pour la construction d'un composant hautement industrialisé. Lorsque vous déterminez la composition d'une équipe, il est de votre devoir de considérer non seulement l'aptitude, mais aussi l'attitude. La combinaison des deux est ce que l'on appelle la capacité.",
        "Comprenez que les personnes ont non seulement des aptitudes (par ex. finance, ingénierie, opérations et marketing) mais aussi des attitudes différentes (pionnier, colon et urbaniste). Les mentalités sont différentes."
      ]
    },
    thinkSmallTeam: {
      mainText: "Pensez petit (comme dans les équipes)",
      shortText: "Pensez petites équipes",
      explanations: [
        "Tout doit être décomposé en petites équipes. À titre indicatif, lors de l'exploration de l'espace inexploré, une équipe de 3 à 5 semble appropriée. Lors de la création d'une capacité de produit/service, une équipe de deux pizzas (c'est-à-dire 12) semble plus appropriée. Lors de la fourniture d'un composant industrialisé, une équipe plus large peut être justifiée. En aucun cas, la taille de cette équipe ne doit approcher de près le nombre de Dunbar. Tout ce qui dépasse 40 devrait être considéré comme très douteux et un candidat immédiat pour être divisé en équipes plus petites basées sur les besoins des utilisateurs."
      ]
    },
    standards: {
      mainText: "Utilisez des normes lorsque c'est approprié",
      shortText: "Utilisez des normes",
      explanations: [
        "NB : toute personne suggérant que nous devrions créer notre propre service cloud où un service de facto existe court le risque d'être convoquée devant l'entreprise comme la personne essayant de dépenser tout le budget de gâteau sur un projet de vanité. À moins que vous ne puissiez clairement montrer que vous pouvez sur-industrialiser et rendre plus une commodité ce qui existe, alors utilisez le.",
        "Si quelque chose est industrialisé et si des normes existent, essayez de les utiliser. Il y a toujours une tentation de créer une meilleure norme, mais essayez d'éviter cela ou de créer des couches supplémentaires sur d'autres « normes » à moins que vous n'ayez une raison extrêmement convaincante de le faire. Si vous avez besoin d'un grille-pain, achetez un grille-pain et ne tentez pas d'en créer un à partir de zéro."
      ]
    },
    failure: {
      mainText: "Gérer l'échec",
      explanations: [
        "Dans tout système, il y a des risques. Utilisez les cartes chaque fois que possible pour vous aider à comprendre les modes de défaillance, ce qui peut mal tourner et ce qui sera impacté si un composant échoue. Essayez autant que possible de réduire les risques en distribuant les systèmes, en les concevant pour qu'ils puissent échouer et en introduisant constamment des défaillances (utilisation de moteurs de chaos comme le chaos monkey de Netflix). Atténuez les modes de défaillance connus tels que la construction d'efforts à grande échelle (type Étoile de la mort)."
      ]
    },
    iterativeStrategy: {
      mainText: "La stratégie est itérative, non linéaire (cycles rapides et réactifs)",
      shortText: "La stratégie est itérative",
      explanations: [
        "Ceci est pour toute personne envisageant d'écrire des documents de stratégie interminables, des modèles de fonctionnement cibles et des plans étape par étape de ce que sera l'avenir. Prenez immédiatement rendez-vous avec les RH. Vous êtes un atout précieux pour l'entreprise, en particulier si nous pouvons vous placer dans un concurrent. Les RH vous aideront à trouver un poste de stratégie dans un concurrent et vous recevrez des références flatteuses, surtout sur la façon dont nous déplorons de vous perdre. Nous pourrions même essayer de donner l'impression de vous retenir pour encourager le concurrent à penser que vous êtes une acquisition attrayante. Nous vous paierons même pour les rejoindre. Au lieu de plans interminables, nous aurons une direction vers une position et nous nous adapterons au besoin. Nous traverserons la rivière en sentant les pierres.",
        "Comprenez que la stratégie est itérative. Vous devez vous adapter en cycles rapides selon l’environnement en mutation. Le mieux que vous puissiez espérer est une direction, un processus constant d'apprentissage et d'amélioration de votre jeu en cours de route."
      ]
    },
    action: {
      mainText: "Un biais vers l'action (apprendre en jouant le jeu)",
      shortText: "Un biais vers l'action",
      explanations: [
        "Les modèles économiques communs et les formes de jeu contextuelles spécifiques sont découverts en jouant le jeu. Par conséquent, les choix stratégiques doivent être faits par ceux qui jouent le jeu et la stratégie doit être développée en interne et non en externe. Nous devons également partager ce que nous avons appris (d'où, encore une fois, les cartes et le but de les rassembler). Engager des consultants en stratégie pour rédiger des documents indiquant ce que nous devons faire recevra une autre bonne réprimande et absolument aucun gâteau. Certes, utilisez des personnes extérieures pour apprendre des formes de jeu contextuelles spécifiques, mais c'est nous qui jouons le jeu.",
        "Ne tentez pas de créer la carte parfaite. Ayez un biais vers l'action car le paysage changera et vous découvrirez plus grâce à l'action. Vous apprenez en jouant le jeu."
      ]
    },
    distributePower: {
      mainText: "Distribuer le pouvoir et la prise de décision",
      explanations: [
        "Ayez un biais vers la distribution du pouvoir depuis le centre, y compris vous-même. Mettez le pouvoir entre les mains de ceux qui sont les plus proches des choix à faire.",
        "Les départements et les groupes devraient pouvoir s'organiser comme ils l'entendent pour répondre à la politique centrale. Ainsi, la procédure de gouvernance devrait s'abstenir d'imposer directement des méthodes de projet et des structures aux départements et aux groupes, et permettre la prise de décision autonome. Les améliorations apportées aux modes de fonctionnement pourraient être réalisées par le biais de cartes, par ex. si un département pense que tout doit être externalisé, nous pourrions utiliser leurs propres cartes pour les aider à remettre en question leur propre réflexion."
      ]
    },

    phaseIII: "III - Optimisation des Ressources pour une Efficacité Accrue",
    purpose: {
      mainText: "Fournir un but, de la maîtrise et de l'autonomie",
      explanations: [
        "Chaque équipe doit être autonome dans les limites de ce qu'elle est censée faire (décrit par une fonction de fitness). Chaque équipe possèdera donc ce qu'elle fait. Chaque équipe doit pouvoir voir comment elle s'insère dans l'ensemble (donc des cartes) et développer une maîtrise à la fois en aptitude et en attitude.",
        "Donnez aux gens un but (y compris un impératif moral et une portée) pour agir. Permettez-leur de développer une maîtrise dans le domaine de leur choix et donnez-leur la liberté (et l'autonomie) d'agir."
      ]
    },
    exceptionalStandards: {
      mainText: "Fixez des normes exceptionnelles (le bien n'est tout simplement pas acceptable)",
      shortText: "Fixez des normes exceptionnelles",
      explanations: [
        "Ne vous contentez pas d’aussi bien ou légèrement mieux que les concurrents. Cherchez toujours le meilleur possible."
      ]
    },
    direction: {
      mainText: "Engagez-vous dans la direction, soyez adaptatif en chemin (traverser la rivière en sentant les pierres)",
      shortText: "Engagez-vous dans la direction",
      explanations: [
        "Une fois que vous avez défini une direction, engagez-vous y. Il y aura souvent des obstacles et des épreuves, mais ne changez pas simplement de direction parce qu'une seule étape est difficile. Essayez de trouver des chemins pour contourner les obstacles. Si vous construisez un système et qu'un composant commun n'est pas tel que prévu, cela peut souvent prouver une opportunité de marché."
      ]
    },
    biasTowardsNew: {
      mainText: "Un biais vers le nouveau (soyez curieux, prenez des risques appropriés)",
      shortText: "Un biais vers le nouveau",
      explanations: [
        "Quoi que vous fassiez, cela évoluera. Ayez donc un biais vers le nouveau, soyez curieux et prenez des risques appropriés. Soyez prêt à expérimenter.",
        "Nous avons mis l'accent sur une approche de l'innovation de l'extérieur vers l'intérieur où le changement était conduit et encouragé au niveau local par des fonds de démarrage plutôt que le gouvernement essayant d’imposer sa propre conception du changement à travers \"les grandes IT\". Le rôle du gouvernement central a été réduit à fournir une expertise technique, une fonction de client intelligent pour remettre en question ce qui était fait, des services de composants industrialisés, encourager le changement et montrer à quoi ressemblait le bien."
      ]
    },
    betterWithLess: {
      mainText: "Faire mieux avec moins (amélioration continue)",
      shortText: "Faire mieux avec moins",
      explanations: [
        "Ayez un biais vers l'amélioration continue.",
        "Une telle démarche devait être transparente et mesurée en termes de coût. Elle devait fournir un défi pour ce qui était actuellement en construction. De cela, nous avons développé l'idée d'un comité de contrôle qui est devenu plus tard un contrôle des dépenses sous l'OCTO. Il ne suffisait pas de simplement réduire les dépenses; notre objectif était de réduire radicalement les déchets tout en améliorant les services publics. Nous ne pouvions pas faire cela sans mesure. Nous avons compris que cela ne serait pas une approche d'un seul coup mais un processus itératif – un cycle constant de « faire mieux avec moins ». À cette fin, nous avons proposé l'utilisation de données ouvertes avec un accent sur le gouvernement devenant plus transparent. Nous avons également ajouté l'utilisation de logiciels open source, y compris les pratiques associées et l'utilisation de normes ouvertes pour stimuler les marchés concurrentiels."
      ]
    },
    optimiseFlow: {
      mainText: "Optimiser le flux (éliminer les goulets d'étranglement)",
      shortText: "Optimiser le flux",
      explanations: [
        "Que ce soit avec ce que nous construisons ou comment, nous sommes tenus d'éliminer les goulets d'étranglement et d'améliorer le débit autant que possible. Cependant, attention à ne pas rendre l'inefficace plus efficient plutôt que de rendre l'inefficace plus efficace - d'où l'importance de la conscience situationnelle. Tout ce qui gêne la satisfaction des besoins des utilisateurs, la rapidité, la transparence des informations pertinentes sera traité de manière impitoyable et renvoyé à la guillotine, par ex. les processus de frais de l'entreprise. Indice: il est généralement beaucoup plus efficace de donner simplement à tout le monde des cartes de crédit de l'entreprise, de dire « dépenser dans l'intérêt de l'entreprise » et de laisser les comptes trier les factures de carte de crédit plutôt que de faire remplir aux employés des formulaires de frais.",
        "Dans une carte, il y aura de nombreux flux de capital – que ce soit d'informations, de risques, sociaux ou financiers. Essayez d'optimiser cela et d'éliminer les goulets d'étranglement."
      ]
    },
    thinkBig: {
      mainText: "Penser grand (inspirer les autres, donner une direction)",
      shortText: "Inspirer les autres",
      explanations: [
        "Bien que les actions que vous entreprenez, la manière dont vous vous organisez et le souci du détail vous obligent à penser petit, lorsque vous inspirez les autres, donnez une direction et un impératif moral, pensez grand. Votre objectif n’est pas de défendre le col étroit des Thermopyles mais de vaincre l'armée persane et de sauver les états grecs.",
        "Nous devons sortir de la mentalité de réflexion sur des systèmes spécifiques et nous attaquer au problème dans son ensemble. Nous devions nous éloigner de ces systèmes isolés individuels. Nous devions changer le mécanisme de livraison par défaut des services publics vers les services en ligne en utilisant des processus automatisés pour la plupart des citoyens. Nous avions besoin d'une approche qui se concentre sans relâche sur la livraison au citoyen et ses besoins."
      ]
    },
    beHumble: {
      mainText: "Soyez humble (écoutez, soyez désintéressé, ayez de la fortitude)",
      shortText: "Soyez humble",
      explanations: [
        "Écoutez les autres, soyez désintéressé, ayez de la fortitude et soyez humble. Inspirez les autres par qui vous êtes et ce que vous faites. Il existe de nombreuses façons de manipuler le paysage, par ex. par le marketing, en persuadant les autres que ce qui est une commodité est en quelque sorte différent ou qu’un produit est unique pour eux. Mais ces manipulations ont un coût non seulement externe mais aussi interne. Nous pouvons commencer à croire notre propre battage publicitaire, notre propre infaillibilité et notre « droit » au marché."
      ]
    },
    beOwner: {
      mainText: "Soyez propriétaire (prenez vos responsabilités)",
      shortText: "Soyez propriétaire",
      explanations: [
        "Prenez vos responsabilités pour votre environnement, vos actions au sein de celui-ci et la façon dont vous jouez le jeu. Vous pourriez sous-traiter cela à un tiers de la manière dont un joueur d'échecs pourrait sous-traiter son jeu à un autre, mais vous n'apprendrez pas et c'est toujours vous qui perdez."
      ]
    },
    complexStrategy: {
      mainText: "La stratégie est complexe (embrassez l'incertitude)",
      shortText: "Embrassez l'incertitude",
      explanations: [
        "Il y aura de l'incertitude, des modèles émergents et des surprises en cours de route. C'est la nature même de la concurrence en raison de l'implication d'autres acteurs. Embrassez cela, ne tombez pas dans la tentation de croire que vous pouvez planifier l'avenir. Ce qui compte, ce n'est pas le plan mais la préparation et votre capacité à vous adapter."
      ]
    },
    seekTheBest: {
      mainText: "Cherchez le meilleur",
      explanations: [
        "Essayez de trouver et de développer les meilleures personnes ayant les meilleures aptitudes et attitudes pour leurs rôles. Investissez pour les garder. Ne les forcez pas à devenir quelque chose qu'ils ne sont pas. Il est tout à fait raisonnable qu'un testeur de systèmes véritablement doué, qui excelle dans un monde de planification urbaine de systèmes massivement compliqués et automatisés, soit payé plus cher que le chef de projet. Ce que vous voulez éviter, c'est de retirer des personnes exceptionnelles de leur rôle et de les mettre dans quelque chose auquel elles ne sont pas adaptées simplement parce qu'elles pensent que c'est la seule façon de progresser. Le leadership, la gestion et l'ingénierie sont toutes des aptitudes, elles sont toutes précieuses et elles doivent fonctionner de concert. Si la hiérarchie de votre organisation reflète uniformément vos échelles salariales, alors vous êtes probablement en train de drainer des talents de là où ils devraient être et de les mettre dans des rôles qu'ils ne sont pas adaptés à occuper. Cela est souvent fait pour des arguments de « responsabilité » ou de « gestion de grandes équipes » (ce qui pousse également les personnes à essayer de constituer des empires) ou de « partage d'expérience » ou de « parcours de carrière », mais il existe d'autres moyens d'y parvenir que de prendre un ingénieur doué et de le transformer en un chef de projet médiocre. C'est probablement l'un des domaines les plus difficiles car l'ego est rapidement rencontré."
      ]
    },

    phaseIV: "IV - Adaptabilité et Évolution Continues",
    landscape: {
      mainText: "Exploitez le paysage",
      explanations: [
        "Utilisez le paysage à votre avantage, il existe souvent de puissants multiplicateurs de force. Vous pourriez décider de ne pas tirer parti d'un concurrent ou d'un changement sur le marché, mais cela doit être un choix conscient."
      ]
    },
    noCore: {
      mainText: "Il n'y a pas de noyau (tout est transitoire)",
      shortText: "Il n'y a pas de noyau",
      explanations: [
        "Tout est transitoire, ce que vous pensez être le cœur de votre entreprise ne le sera pas à un moment donné dans l'avenir. Les seules choses vraiment statiques sont mortes."
      ]
    },
    ecosystem: {
      mainText: "Écoutez votre écosystème (agit comme un moteur de perception de l’avenir)",
      shortText: "Écoutez votre écosystème",
      explanations: [
        "Il existe de nombreuses formes différentes d'écosystèmes et de façons de les exploiter. Ceux-ci peuvent être de puissants moteurs de perception (par ex. le modèle ILC) pour les changements futurs ainsi que des sources de coopération avec d'autres ainsi que des alliances défensives et offensives. Mais les écosystèmes doivent être gérés, ils ont besoin de soins comme un jardinier entretient un jardin - parfois vous les laissez pousser sauvages, parfois vous les récoltez, parfois vous les aidez à se diriger ou à se contraindre. Ce sont des compétences particulières que vous pouvez développer, mais le plus important est le principe - écoutez-les.",
        "Nous avons vu l'approche centralisée existante comme problématique parce qu’elle était souvent éloignée des véritables besoins des employés des services publics, des intermédiaires ou des citoyens eux-mêmes. Nous avons envisagé un nouveau groupe d'ingénierie qui travaillerait sur le terrain et repérerait, puis favoriserait les opportunités de changement en première ligne, en travaillant en étroite collaboration avec les prestataires de services."
      ]
    },
    noOneCulture: {
      mainText: "Il n'y a pas de culture unique (ex. pionniers, colons et urbanistes)",
      shortText: "Pas de culture unique",
      explanations: [
        "Comprenez qu'une entreprise qui planifie sa pérennité doit faire face non seulement à la découverte de composants inexplorés mais aussi à l'utilisation des composants industrialisés et à la transition entre ces deux extrêmes. Vous aurez besoin de différentes attitudes. Vous créerez donc de nombreuses cultures dans votre organisation, par ex. les pionniers, les colons et les urbanistes ont des cultures différentes. Ce n'est pas une mauvaise chose et ne tentez pas d'écraser tout le monde dans une seule culture terne. Cela ne les rendra pas heureux."
      ]
    },
    constantEvolution: {
      mainText: "Concevez pour une évolution constante",
      explanations: [
        "Bien qu'une équipe puisse devenir une structure semi-permanente, le travail qu'elle entreprend évoluera. Il est donc de votre devoir de vous assurer que le travail évolue à travers l'organisation, par exemple une équipe pionnière découvre un espace inexploré, une équipe de colons prend le travail et le productivise, forçant ainsi les pionniers à avancer. Une équipe d'urbanistes industrialise ensuite le produit lorsque cela est approprié, obligeant les colons à avancer.",
        "Créez un système organisationnel capable de faire face au flux constant et à l'évolution constante du paysage. Idéalement, les changements devraient traverser votre organisation sans nécessiter de restructuration constante. Une structure en cellules utilisant un système de vol avec des pionniers, des colons et des urbanistes est un tel système."
      ]
    },
  }
});

export default strings;
