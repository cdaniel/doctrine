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

        phaseI: "I",
        knowYourUsers: {
          mainText: "Know your users (e.g. customers, shareholders, regulators, staff)",
          shortText: "Know your users",
          explanations : [
            "Any value we create is through meeting the needs of others. A mantra of \"not sucking as much as the competitors\" is not acceptable. We must be the best we can be.",
            "When mapping a landscape then know who your users are e.g. customers, shareholders, regulators and staff."
          ]
        },
        systematicLearning: {
          mainText:"Use a systematic mechanism of learning (a bias towards data)",
          shortText: "Bias towards data",
          explanations: [
            "The purpose of mapping is not just to create a map and a shared understanding but also to learn climatic patterns, doctrine and context specific play. Maps provide a systematic way of doing this as long as you collate, review and learn from them. Have a bias towards such learning and the use of data.",
            "The governance system must provide a mechanism of consistent measurement against outcomes and for continuous improvement of measurements."
          ]
        },
        highSituationalAwareness: {
          mainText:"Focus on high situational awareness (understand what is being considered)",
          shortText: "Understand what is being considered",
          explanations: [
              "There is a reasonably strong correlation between awareness and performance, so focus on this. Try to understand the landscape that you are competing in and understand any proposals in terms of this. Look before you leap.",
              "A major failing of “Better for Less” was the lack of emphasis on maps. I need to increase situational awareness beyond simple mental models and structures such as ILC. To achieve this, we needed to develop maps within government which requires an anchor (user need), an understanding of position (the value chain and components involved) and an understanding of movement (evolution). To begin with, the proposed governance system needed to clearly reflect user needs in all its decision-making processes. The users include not only departmental users but also the wider public who will interact with any services provided. It was essential, therefore, that those users’ needs were determined at the outset, represented in the creation of any proposal and any expected outcomes of any proposal are set against those needs. But this was not enough, we needed also the value chain that provided those user needs and how evolved the components were. Maps therefore became a critical part of the Governance structure."
          ]
        },
        commonLanguage: {
          mainText:"Use a common language (necessary for collaboration)",
          shortText: "Common language",
          explanations: [
              "Instead of using multiple different ways of explaining the same thing between different functions of the business, we use one - a map. If you can't map what you're doing then don't do it. Situational awareness is not optional.",
              "A necessity for effective collaboration is a common language. Maps allow many people with different aptitudes (e.g. marketing, operations, finance and IT) to work together in order to create a common understanding. Collaboration without a common language is just noise before failure.",
              "The governance system had to provide a mechanism for coordination and engagement across groups including departments and spend control. This requires a mechanism of shared learning – for example, discovery and dissemination of examples of good practice. To achieve this, we must have a common language. Maps were that language."
          ]
        },
        challenge: {
          mainText:"Challenge assumptions (speak up and question)",
          shortText: "Challenge assumptions",
          explanations: [
            "It's a duty for everyone in the company to challenge assumptions. Where possible we use data collated from maps as the purpose of the maps is to expose the thinking. I don't care if it was my pet project, you will openly and honestly tell me why you think I'm wrong. Challenge requires transparency and trust. Any form of retribution or bias against someone for challenging is a deadly sin that will not be forgiven and you will be carted off to work for a competitor. For reference, as the CEO of Fotango, I made my CFO the XO back in 2004. One of his duties was to challenge me and agree / disagree with my choices.",
            "Maps allow for assumptions to be visually exposed. You should encourage challenge to any map with a focus on creating a better map and a better understanding. Don't be afraid of challenge, there is no place for ego if you want to learn."
          ]
        },
        focusOnUserNeeds: {
          mainText:"Focus on user needs",
          explanations: [
            "An essential part of mapping is the anchor of user needs. Ideally you want to create an environment where your needs are achieved by meeting the needs of your users. Be mindful that these needs will evolve due to competition and in the uncharted space they are uncertain. Also, be aware that users may have different and competing needs and be prepared to balance the conflict."
          ]
        },
        removeBiasAndDuplication: {
          mainText:"Remove bias and duplication",
          explanations: [
            "We not only share maps, we collate them in an effort to remove duplication (i.e. rebuilding the same thing) and bias (i.e. custom building that which is a commodity). This is not optional and no, your accounting system is not unique because of the colour of your invoices nor do you have a unique way of purchasing advertising space. We all have a duty to remove duplication and bias in the organisation.",
            "Use multiple maps to help you remove duplication and bias within an organisation. You will often find in any large organisation that there are people custom building what is a commodity or rebuilding something that exists elsewhere. Remember, that they're not doing this because they're daft but because of pre-existing inertia or the lack of any effective communication mechanism i.e. they simply don't know it exists elsewhere. Be warned, the level of duplication within most organisations vastly exceeds any expectations that they might have and you're often treading on the toes of someone's pet project. Large distributed companies often talk about duplication in the single digits e.g. we have six enterprise content management systems. They tend to react poorly when it is \"discovered\" that they have hundreds or even \"thousands\". People can get very defensive in this space"
          ]
        },
        thinkSmallDetails: {
          mainText:"Think small (as in know the details)",
          shortText: "Know the details",
          explanations: [
            "Know the details, use small teams and break large landscapes into small contracts. Don't be chased away by fears of complexity of management or \"too many interfaces to manage\"."
          ]
        },
        methods: {
          mainText:"Use appropriate methods (e.g. agile vs lean vs six sigma)",
          shortText: "Use appropriate methods",
          explanations: [
            "anyone suggesting we should be all agile, all lean or all six sigma will get a right good talking to without the cake. Same with others suggesting one size fits all purchasing methods.",
            "Try to avoid the tyranny of one. Understand that there is no magic solution and that you have to use multiple methods  (e.g. agile or lean or six sigma) as appropriate. In any large system, multiple methods may be used at the same time. Be mindful of ego here, tribes can form with almost religious fervour about the righteousness of their method.",
            "Governance had to accept that there are currently no single methods of management that are suitable for all environments. The use of multiple methods and techniques based upon context had to become a norm."
          ]
        },

        phaseII: "II",
        beTransparent: {
          mainText:"Be transparent (a bias towards open)",
          shortText: "A bias towards open",
          explanations: [
            "We don't hide our maps, we share them and allow others to challenge and question our assumptions. The act of sharing is essential because it helps us to learn. Transparency also requires us to remove all the noise, the pointless gibberish that gets in the way of learning. Anyone not willing to learn, will forgo the slice of cake and be helped to find a new job with a competitor.",
            "Have a bias towards openness within your organisation. If you want to effectively learn about the landscape then you need to share your maps with others and allow them to add their wisdom and their challenge to the process. Building maps in secret in your organisations is a surefire way of having a future meeting where somebody points out the blindingly obvious thing you have missed.",
            "The governance system had to be entirely transparent. For example, proposals must be published openly in one place and in one format through a shared and public pipeline. This must allow for examination of proposals both internally and externally of Government to encourage interaction of departments and public members to any proposal."
          ]
        },
        moveFast: {
          mainText:"Move fast (an imperfect plan executed today is better than a perfect plan executed tomorrow)",
          shortText: "Move fast",
          explanations: [
            "The speed at which you move around the cycle is important. There is little point implementing FIRE like principles in developing a system if it takes you a year to make decision to act. An imperfect plan executed today is better than a perfect plan executed tomorrow.",
            "We understood that there would be inertia to the changes we were proposing and that existing culture and structures could well rise to combat us. We put in place an initial concept of work streams that targeted different areas. The idea was that if we ever put this in place then we’d have 100 days or so to make the changes before resistance overwhelmed us."
          ]
        },
        bePragmatic: {
          mainText:"Be pragmatic (it doesn't matter if the cat is black or white as long as it catches mice)",
          shortText: "Be pragmatic",
          explanations: [
            "Focus on meeting the user needs and simplify as much as possible. There will always be edge cases or a way to make something more perfect nut but if what you're building could use a component that already exists then try to avoid the urge to re-invent it. If you're a taxi company then investing your funds into making that perfect tyre will not help your business. Always challenge when you depart from using something that already exists. The old adage of \"It doesn’t matter if the cat is black or white as long as it catches mice\" is relevant here.",
            "We accepted that not everything would fit into the structure or work streams that we had described. A majority would and it was the cost reduction and improvement in those cases that would generate the most savings. However, it was important to acknowledge that a one-size fits all approach would not work and will be vulnerable to inertia. Pragmatism to achieve the change was more important than ideology. We also had to maintain the existing IT estate whilst acknowledging the future will require a fundamentally different approach based upon agile, open and effective local delivery. We would have to not only audit but sweat the existing assets until they could be replaced."
          ]
        },
        thinkFast: {
          mainText:"Think fast, inexpensive, restrained and elegant (FIRE, formerly FIST)",
          shortText: "Think fast, inexpensive, restrained and elegant",
          explanations: [
            "Ok, Dan Ward might say FIRE (and do go buy his book) but I'll stick with his original terms. You will move quickly with a bias towards action, you will use inexpensive components and be frugal wherever possible, you will simplify the problem as much as possible and you will build in small components ... otherwise you WILL not build.",
            "Break large systems down into small components, use and re-use inexpensive components where possible, constrain budgets and time, build as simply and as elegantly as possible.",
            "Governance should encourage an approach of fast, inexpensive, simple and tiny rather than creation of slow, expensive, complex and large systems to achieve value for money. Any reasonably large technology proposal should be broken down into smaller components with any in-house development achieved through small teams. The breaking down of large systems would also help demonstrate that multiple methods were usually needed along with encouraging re-use. However, we should be prepared for inertia and counter arguments such as the “complexity of managing interfaces”. The interfaces existed regardless of whether we tried to ignore them or not."
          ]
        },
        focusOutcome: {
          mainText:"Focus on the outcome not a contract (e.f. worth based development)",
          shortText: "Focus on the outcome",
          explanations: [
            "When using contracts then try to focus on the outcome and what you're trying to achieve rather than the contract itself.  Realise that different types of contract will be needed e.g. outsourced or time and material based or worth based development. Along with a focus on outcomes, try and keep contracts constrained in terms of time and budget."
          ]
        },
        appropriateTools: {
          mainText:"Use appropriate tools (e.g. mapping, financial models)",
          shortText: "Use appropriate tools",
          explanations: [

          ]
        },
        manageInertia: {
          mainText:"Manage inertia (e.g. existing practice, political capital, previous investment)",
          shortText: "Manage inertia",
          explanations: [
            "We all have it. It's caused by past success. You will realise that you have it. There are about sixteen different forms and you will learn how to recognise this. When you find yourself saying \"but this is how we do it\" or \"but this has always worked in the past\" or \"don't fiddle with the machine as it ain't broke\" then you will question why you are saying this. If someone is challenging what is being done then you will LISTEN and you will ask why you are responding in such a way.",
            "At some point you will face inertia to change e.g. existing practice, political capital or previous investment. Try and understand the root cause. Ideally use a map to anticipate before you encounter and hence have prepared solutions & counter arguments. If possible, use the maps to enable people to discover their own inertia."
          ]
        },
        effectivenessOverEfficiency: {
          mainText:"Effectiveness over efficiency",
          explanations: [
              "Whilst optimising flow is important, be careful not to waste valuable time making the ineffective more efficient. Understand the landscape and how it is changing before you attempt to optimise flow. Remove the ineffective before you focus on efficiency.",
              "In any system there is risk. Use the maps where possible to help you understand failure modes, what can go wrong and what will be impacted if a component fails. Try where possible to mitigate risks by distributing systems, by designing for failure and by the constant introduction of failure (use of chaos engines such as Netflix's chaos monkey). Mitigate against known failure modes such as building large scale (death star) like efforts."
          ]
        },
        thinkAptitudeAndAttitude: {
          mainText:"Think aptitude and attitude",
          explanations: [
            "Each team may contain discrete skills (e.g. networks, marketing, engineering, finance) known as aptitudes. But each aptitude has an attitude i.e. the culture, methods and techniques for agile development of an entirely novel act are not the same as those for building a highly industrialised component. When determining composition of team, it is a duty to consider not only the aptitude but the attitude. The combination of both is what we call capability.",
            "Understand that people not only have aptitudes (e.g. finance, engineering, operations and marketing) but different attitudes (pioneer, settler and town planner). The mindsets are different."
          ]
        },
        thinkSmallTeam: {
          mainText:"Think small (as in teams)",
          shortText: "Think small teams",
          explanations: [
            "Everything must be broken down into small teams. As a guide, when exploring the uncharted space a team of 3-5 seems appropriate. When building a product / service capability then two pizza (i.e. 12) seems more apt. When providing an industrialised component then a larger team can be argued for. Under no circumstances will that team size approach anything close to the Dunbar number. Anything larger than 40 should be considered as highly dubious and an immediate candidate for dividing into smaller teams based upon user needs.",

          ]
        },
        standards: {
          mainText:"Use standards where appropriate",
          shortText: "Use standards",
          explanations: [
            "NB anyone suggesting we should build our own cloud service where a defacto service exists runs the risk of getting hauled up in front of company as the person trying to spend the entire cake budget on a vanity project. Unless you can clearly show you can out industrialise and make more of a commodity whatever exists, then use it.",
            "If something is industrialised and if standards exist then try to use them. There's always a temptation to build a better standard but try to avoid this or building layers on top of other \"standards\" unless you have an extremely compelling reason to do so. If you need a toaster, buy a toaster and don't try building one from scratch."
          ]
        },
        failure: {
          mainText:"Manage failure",
          explanations: [
            "In any system there is risk. Use the maps where possible to help you understand failure modes, what can go wrong and what will be impacted if a component fails. Try where possible to mitigate risks by distributing systems, by designing for failure and by the constant introduction of failure (use of chaos engines such as Netflix's chaos monkey). Mitigate against known failure modes such as building large scale (death star) like efforts."
          ]
        },
        iterativeStrategy: {
          mainText:"Strategy is iterative not linear (fast reactive cycles)",
          shortText: "Strategy is iterative",
          explanations: [
            "This is for anyone thinking of writing long winded strategy documents, target operating models and step by step plans of how the future will be. Immediately book an appointment with HR. You are a valuable asset for the company particularly if we can deploy you within a competitor. HR will help you find a strategy position in a competitor and you will be given glowing references especially about how sad we are to lose you. We might even try to put up a \"fight\" to encourage the competitor to think you're an attractive acquisition. We will even pay you to join them. Instead of long winded plans, we will have direction towards a position and adapt as needed. We will \"cross the river by feeling the stones\".",
            "Understand that strategy is iterative. You need to adapt in fast cycles according to the changing environment. The best you can hope for is a direction, a constant process of learning and improvement of your gameplay along the way."
          ]
        },
        action: {
          mainText:"A bias towards action (learn by playing the game)",
          shortText: "A bias towards action",
          explanations: [
            "Common economic patterns and context specific forms of gameplay are discovered by playing the game. Hence strategic choices must be made by those who play the game and strategy developed internally and not externally. We must also share what we've learned (hence again, maps and the purpose of collating them). Hiring strategy consultants to write documents telling us what to do will get a another good yelling at and absolutely no cake whatsoever. Certainly use outsiders to learn context specific forms of gameplay but we're the ones playing the game.",
            "Do not attempt to create the perfect map. Have a bias towards action because the landscape will change and you will discover more through action. You learn by playing the game.",

          ]
        },
        distributePower: {
          mainText:"Distribute power and decision making",
          explanations: [
            "Have a bias towards distributing power from the centre including yourself. Put power in the hands of those who are closest to the choices that need to be made.",
            "Departments and groups should be able organize themselves as appropriate to meet central policy. Hence the governance procedure should refrain from directly imposing project methodologies and structure on departments and groups and allow for autonomous decision making. Improvements to ways of operating could be achieved through challenging via maps i.e. if one department thought that everything should be outsourced, we could use their own maps to help them challenge their own thinking."
          ]
        },

        phaseIII: "III",
        purpose: {
          mainText:"Provide purpose, mastery & autonomy",
          explanations: [
            "Each team shall be autonomous within the confines of what it is supposed to do (described by a fitness function). Each team will therefore own what it does. Each team shall be able to see how they fit into the whole (hence maps) and develop mastery in both aptitude and attitude.",
            "Provide people with purpose (including a moral imperative and a scope) for action. Enable them to build mastery in their chosen area and give them the freedom (& autonomy) to act."
          ]
        },
        exceptionalStandards:{
          mainText:"Set exceptional standards (great is just not good enough)",
          shortText: "Set exceptional standards",
          explanations: [
            "Don't settle for as good as or slightly better than competitors. Always strive for the very best that can be achieved."
          ]
        },
        direction: {
          mainText:"Commit to the direction, be adaptive along the path (crossing the river by feeling the stones)",
          shortText: "Commit to the direction",
          explanations: [
            "Once you've set a direction commit to it. There will often be hurdles and obstacles but don't just simply abandon a direction because a single step is challenging. Try to find paths around the obstacles. If you're building a system and a common component is not as expected then that can often prove a market opportunity."
          ]
        },
        biasTowardsNew: {
          mainText:"A bias towards the new (be curious, take appropriate risks)",
          shortText: "A bias towards the new",
          explanations: [
            "Whatever you do will evolve. So have a bias towards the new, be curious and take appropriate risks. Be willing to experiment.",
            "We focused on an outside-in approach to innovation where change was driven and encouraged at the local level through seed funds rather than Government trying to force its own concept of change through “big IT”. The role of central Government was reduced to providing engineering expertise, an intelligent customer function to challenge what was done, industrialised component services, encouragement of change and showing what good looked like."
          ]
        },
        betterWithLess: {
          mainText:"Do better with less (continual improvement)",
          shortText: "Do better with less",
          explanations: [
            "Have a bias towards continual improvement.",
            "Such an approach had to be transparent and measured in terms of cost. It had to provide challenge for what was currently being built. From this we developed the idea of a scrutiny board which later became spend control under OCTO. It wasn’t enough to simply reduce spending; our focus was on dramatically reducing waste whilst improving public services. We couldn’t do this without measurement. We understood that this would not be a big bang approach but an iterative process – a constant cycle of doing better with less. To this end, we proposed the use of open data with a focus on the Government becoming more transparent. We also added the use of open source including the practices associated with it and the use of open standards to drive competitive markets."
          ]
        },
        optimiseFlow: {
          mainText:"Optimise flow (remove bottlenecks)",
          shortText: "Optimise flow",
          explanations: [
            "Whether it is with what we build or how, we are required to remove bottlenecks and improve throughput where possible. However, care must be taken not to make the ineffective more efficient rather than making the ineffective more effective - hence the importance of situational awareness. Anything which gets in the way of meeting user needs, being fast, transparency on relevant information will be treated ruthlessly and for the guillotine e.g. corporate expense processes. Hint, it's usually way more effective to just to give everyone company credit cards, say \"spend in the interest of the company\" and get accounts to sort through the credit card bills rather than having staff fill out expense forms.",
            "Within a map there will be many flows of capital - whether information, risk, social or financial. Try to optimise this and remove bottlenecks."
          ]
        },
        thinkBig: {
          mainText:"Think big (inspire others, provide direction)",
          shortText: "Inspire others",
          explanations: [
            "Whilst the actions you take, the way that you organise and the focus on detail requires you to think small when it comes to inspiring others, providing direction and moral imperative then think big. Your purpose is not to defend the narrow pass of Thermopylae but instead to defeat the Persian army and save the Greek states.",
            "We need to get out of the mindset of thinking about specific systems and tackle the whole problem. We needed to break away from these isolated individual systems. We needed to change the default delivery mechanism for public services towards online services using automated processes for most citizens. We needed an approached that focused relentlessly on delivery to the citizen and their needs."
          ]
        },
        beHumble: {
          mainText:"Be humble (listen, be selfless, have fortitude)",
          shortText: "Be humble",
          explanations: [
            "Listen to others, be selfless, have fortitude and be humble. Inspire others by who you are and what you do. There are many ways to manipulate the landscape e.g. through marketing, persuading others that what is a commodity is somehow different or that a product is unique to them. But these manipulations come with a cost not just externally but internally. We can start to believe our own hype, our own infallibility and our \"right\" to the market."
          ]
        },
        beOwner: {
          mainText:"Be the owner (take responsibility)",
          shortText: "Be the owner",
          explanations: [
            "Take responsibility for your environment, your actions within it and how you play the game. You could outsource this to a third party in the way a chess player could outsource their gameplay to another but you won't learn and it is still you that loses."
          ]
        },
        complexStrategy: {
          mainText:"Strategy is complex (embrace uncertainty)",
          shortText: "Embrace uncertainty",
          explanations: [
            "There will be uncertainty, emerging patterns and surprises along the way. That's the very nature of competition due to the involvement of other actors. Embrace this, don't fall for the temptation that you can plan the future. What matters is not the plan but the preparation and your ability to adapt."
          ]
        },
        seekTheBest: {
          mainText:"Seek the best",
          explanations: [
            "Try to find and grow the best people with the best aptitude and attitude for their roles. Invest in keeping them. Don't force them into becoming something they're not. It's perfectly reasonable for a truly gifted systems tester who excels in a town planning world of massively complicated and automated systems to be paid more than the project manager. What you want to avoid is taking exceptional people out of their role and putting them into something they are not suited to simply because they think that is the only way to progress. Leadership, management and engineering are all aptitudes, they are all valuable and they have to work in concert. If the hierarchy of your organisation uniformly reflects your pay scales then you're likely to be draining talent from where it should be and putting it into roles that it is not suited for. This is often done for arguments of \"responsibility\" or \"managing bigger teams\" (which also causes people to try and accumulate empires) or \"spreading experience\" or \"career path\" but there are alternative ways of achieving this than taking a gifted engineer and turning them into a mediocre project manager. This is probably one of the most difficult areas as ego is quickly encountered."
          ]
        },

        phaseIV: "IV",
        landscape: {
          mainText:"Exploit the landscape",
          explanations: [
            "Use the landscape to your advantage, there are often powerful force multipliers. You might decide not to take advantage of a competitor or a change in the market but that should be a conscious choice."
          ]
        },
        noCore: {
          mainText:"There is no core (everything is transient)",
          shortText: "There is no core",
          explanations: [
            "Everything is transient, whatever you think is core to your company won't be at some point in the future. The only things that are truly static are dead."
          ]
        },
        ecosystem: {
          mainText:"Listen to your ecosystem (acts as a future sensing engine)",
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
    }
});

export default strings;
