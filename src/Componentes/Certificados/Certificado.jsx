import './index.scss';
import '../../MediaQueries/certificado.scss'
import { FaCrown } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";

function Certificado() {


    return(

        <div className='Conquistas'>

            <h1>Conquistas</h1>

            <div className='Certificados'>

                <div className='Concluidos'>

                    <a href='https://www.linkedin.com/in/peterson-fernando-6b3709133/overlay/experience/2189725970/multiple-media-viewer/?profileId=ACoAACCsxKcBL_qf1Gh48TjhoMw1RGJD5gVBo-Y&treasuryMediaId=1706825913645' target='_blank' rel='noopener noreferrer'>

                        <div className='Icone'>

                            <FaCrown />

                        </div>

                        <p>Em 2022, minha loja alcançou o melhor desempenho da regional, destacando-se como um modelo de excelência.</p>

                    </a>

                    <a href='https://www.linkedin.com/in/peterson-fernando-6b3709133/overlay/experience/2189725970/multiple-media-viewer/?profileId=ACoAACCsxKcBL_qf1Gh48TjhoMw1RGJD5gVBo-Y&treasuryMediaId=1706825913644' target='_blank' rel='noopener noreferrer'>

                    <div className='Icone'>

                        <MdOutlineWork />

                    </div>

                        <p>Concluí um treinamento especializado para me tornar um SubGerente modelo na regional, focado em liderança e excelência operacional.</p>
                   
                    </a>
                        
                    <a href='https://www.linkedin.com/in/peterson-fernando-6b3709133/overlay/education/949086822/multiple-media-viewer/?profileId=ACoAACCsxKcBL_qf1Gh48TjhoMw1RGJD5gVBo-Y&treasuryMediaId=1706730573474' target='_blank' rel='noopener noreferrer'>

                    <div className='Icone'>

                        <PiCertificateBold /> 

                    </div>

                        <p className='CertificadoP'>Certificado HTML e CSS</p>
                 

                    </a>


                </div>    

                <div className='Concluidos'>


                    <a href='https://www.linkedin.com/in/peterson-fernando-6b3709133/overlay/education/949086822/multiple-media-viewer/?profileId=ACoAACCsxKcBL_qf1Gh48TjhoMw1RGJD5gVBo-Y&treasuryMediaId=1709151111949' target='_blank' rel='noopener noreferrer'>

                    <div className='Icone'>

                        <PiCertificateBold /> 

                    </div>

                        <p className='CertificadoP'>Certificado Fundamentos Javascript</p>
                        

                    </a>


                    <a href='https://www.linkedin.com/in/peterson-fernando-6b3709133/overlay/education/949086822/multiple-media-viewer/?profileId=ACoAACCsxKcBL_qf1Gh48TjhoMw1RGJD5gVBo-Y&treasuryMediaId=1709066558292' target='_blank' rel='noopener noreferrer'>

                    <div className='Icone'>

                        <PiCertificateBold />

                    </div>

                        <p className='CertificadoP'>Certificado Desenvolvimento Web</p>

                        

                    </a>

                    <a href='https://www.linkedin.com/in/peterson-fernando-6b3709133/overlay/education/949086822/multiple-media-viewer/?profileId=ACoAACCsxKcBL_qf1Gh48TjhoMw1RGJD5gVBo-Y&treasuryMediaId=1719943298313' target='_blank' rel='noopener noreferrer'>

                    <div className='Icone'>

                        <PiCertificateBold /> 

                    </div>

                    <p className='CertificadoP'>Certificado React com Hooks</p>
    

                    </a>
                    
                </div>


            </div>

        </div>

    )
}

export default Certificado

