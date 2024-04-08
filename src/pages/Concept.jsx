import { ButtonLink } from "../assets/components/Button"
import Text from "../assets/components/Text"

function Concept() {


    return (<>
        <section id="concept">
            <aside>
                <img src="" alt="Téléphone Screenshot Nest-egg" />
            </aside>
            <div>
                <Text
                    className="concept-para-1"
                    content={<span>Salut les amis !
                        C&apos;est Max, votre oiseau préféré.
                        <br />
                        Je suis tellement ravi de vous présenter notre incroyable aventure appelée &quot;Nest Egg&quot; !<br />
                        <br />
                        Alors voilà, imaginez qu'on voyage ensemble dans le monde des finances, et je serai là pour vous guider et vous aider à faire briller votre nid financier.<br />
                        Avec &quot;Nest Egg&quot;, on peut construire notre propre petit nid douillet, en créant des budgets géniaux pour économiser, dépenser intelligemment et atteindre tous nos rêves magiques !<br />
                    </span>}

                />

                <Text
                    className="concept-para-2"
                    content={<span> Et ce n'est pas tout, on peut même inviter nos amis et notre famille à se joindre à nous pour gérer notre budget à plusieurs, c'est tellement fun !<br />
                        <br />
                        On peut enregistrer nos comptes bancaires préférés dans notre nid et je veillerai sur eux pour qu'ils grandissent et se multiplient.<br />
                        <br />
                        Quand on dépense, je trierai toutes nos dépenses dans des catégories colorées, comme ça, on saura toujours où va notre argent et comment faire pour économiser encore plus !
                    </span>}
                />


                <Text
                    className="concept-para-3"
                    content={<span>Alors si vous avez des projets incroyables ou des rêves fous, on va les réaliser ensemble avec "Nest Egg" ! Je vous montrerai comment planifier et atteindre tous nos objectifs financiers avec sagesse. <br />
                        <br />
                        Allez, rejoignez moi et embarquons dans cette aventure palpitante avec "Nest Egg" ! On va s'amuser, économiser et voler vers un avenir financier radieux !</span>}
                />
            </div>
            <ButtonLink to="/signin" content="Rejoins Max" />
        </section>
    </>)
}

export default Concept