import React from 'react';
import Icon1 from '../../images/treemap_4.png';
import Icon2 from '../../images/collapsible_tree_1.png';
import Icon3 from '../../images/bubble_chart_1.png';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP, ServicesContent } from './ServicesElements'

export default class Services extends React.Component{
    render(){
        return (
            <>
                <ServicesContent id="services" style ={{ backgroundImage: 'url('+ require('../../images/Untitled-1.jpg') + ')',
                                                            backgroundPosition: 'center',
                                                            backgroundSize: 'cover',
                                                            backgroundRepeat: 'no-repeat',
                                                            marginTop: '10vh'}}>
                    <ServicesContainer>
                            <ServicesH1>Servicile oferite de noi</ServicesH1>
                            <ServicesWrapper>
                                <ServicesCard>
                                    <ServicesIcon src={Icon1} />
                                    <ServicesH2>Treemap</ServicesH2>
                                    <ServicesP>Diagramele Treemap sunt o modalitate alternativă de vizualizare a structurii ierarhice a unei diagrame arbore, afișând și cantități pentru fiecare categorie prin dimensiunea zonei.</ServicesP>
                                </ServicesCard>
                                <ServicesCard>
                                    <ServicesIcon src={Icon2} />
                                    <ServicesH2>Collapsible Tree</ServicesH2>
                                    <ServicesP>Vizualizați interactiv datele ierarhice într-o diagramă Collapsible Tree pliabilă care poate fi extinsă și minimizată în timp real.</ServicesP>
                                </ServicesCard>
                                <ServicesCard>
                                    <ServicesIcon src={Icon3} />
                                    <ServicesH2>Bubble Chart</ServicesH2>
                                    <ServicesP>Diagramele Bubble Chart sunt de obicei folosite pentru a compara și a arăta relațiile dintre cercurile clasificate, prin utilizarea poziționării și a proporțiilor.</ServicesP>
                                </ServicesCard>
                            </ServicesWrapper>
                        </ServicesContainer>
                </ServicesContent>
            </>
          )
    }
  
}
