import './project.css';
import storehub from '../../assets/storehub.png';
import csharp from '../../assets/c-sharp.png';
import dotnet from '../../assets/dotnet.png';
import sql from '../../assets/sql.svg';
import react from '../../assets/react.svg';
import java from '../../assets/java.svg';
import omi from '../../assets/omi-srt.png';
import pingo from '../../assets/pingo.png';
import crm from '../../assets/crm.png';
import has from '../../assets/has.png';

const Project = () => {
    return(
        <section className="projects-section" id='projects'>
            <div>
                EXPLORE MY CREATIONS
            </div>
            <div className="projects-header">
                PROJECTS
            </div>
            <div className="project-container">
                <div className="project-card-container">
                    <div className="project-card-header">
                        StoreHub.IO
                        <hr></hr>
                    </div>
                    <div className="project-card-body">
                        <div className="project-body-text">
                            StoreHub.IO is an integration system that connects eCommerce platforms like Shopify, Amazon, Takealot, and WooCommerce with accounting software. It automates tasks such as syncing stock, prices, orders, and customer data, reducing manual data entry and minimizing errors. By streamlining processes like stock updates, price adjustments, and order fulfillment, StoreHub.IO improves efficiency, ensures real-time accuracy, and enhances customer satisfaction, enabling businesses to focus on growth and scaling operations.
                            <div className="tech-icons">
                                <span className="badge">
                                    <img src={csharp} alt="csharp" width={20} height={20} style={{ verticalAlign: 'middle', paddingRight: '3px' }}/>
                                    C#
                                </span>
                                <span className="badge">
                                    <img src={dotnet} alt="dotnet" width={20} height={20} style={{ verticalAlign: 'middle', paddingRight: '3px' }}/>
                                    .NET Core
                                </span>
                                <span className="badge">
                                    <img src={sql} alt="sql" width={20} height={20} style={{ verticalAlign: 'middle', paddingRight: '3px'}}/>
                                    SQL
                                </span>
                                <span className="badge">
                                    GitHub
                                </span>
                                <span className="badge">
                                    Hangfire
                                </span>
                                <span className="badge">
                                    EF Core
                                </span>
                                <span className="badge">
                                    gRPC
                                </span>
                            </div>
                        </div>
                        <div className="project-body-image">
                            <img src={storehub} alt="storehub" className="project-image"/>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="project-card-container">
                    <div className="project-card-header">
                        OMI SRT
                        <hr></hr>
                    </div>
                    <div className="project-card-body">
                        <div className="project-body-text">
                        The OMI SRT platform streamlines insurance quote requests for agents and users. Users access the system via a link or QR code, submit their information, and are assigned an agent to complete the process. Built on a federated frontend architecture, the platform ensures seamless collaboration, data continuity, and an efficient user experience.
                            <div className="tech-icons">
                                <span className="badge">
                                    <img src={react} alt="csharp" width={20} height={20} style={{ verticalAlign: 'middle', paddingRight: '3px' }}/>
                                    ReactJs
                                </span>
                                <span className="badge">
                                    <img src={java} alt="dotnet" width={20} height={20} style={{ verticalAlign: 'middle', paddingRight: '3px' }}/>
                                    Java
                                </span>
                                <span className="badge">
                                    Qaurkus
                                </span>
                                <span className="badge">
                                    Agile
                                </span>
                                <span className="badge">
                                    Azure DevOps
                                </span>
                            </div>
                        </div>
                        <div className="project-body-image">
                            <img src={omi} alt="omi" className="project-image"/>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="project-card-container">
                    <div className="project-card-header">
                        Hippo Advisory Service
                        <hr></hr>
                    </div>
                    <div className="project-card-body">
                        <div className="project-body-text">
                        The Hippo Advisory Service facilitates consultants in adding new client data and initiating processes to generate insurance or medical aid quotes. Upon quote generation, the system automatically sends the quote to the client via email. To ensure enhanced security, clients are required to obtain and input a one-time password (OTP) before viewing the quote. This multifaceted solution optimises customer service and decision-making processes, catering to the dynamic needs of insurance or medical aid inquiries.
                            <div className="tech-icons">
                                <span className="badge">
                                    <img src={csharp} alt="csharp" width={20} height={20} style={{ verticalAlign: 'middle', paddingRight: '3px' }}/>
                                    C#
                                </span>
                                <span className="badge">
                                    <img src={dotnet} alt="dotnet" width={20} height={20} style={{ verticalAlign: 'middle', paddingRight: '3px' }}/>
                                    .NET Core
                                </span>
                                <span className="badge">
                                    EF Core
                                </span>
                                <span className="badge">
                                    Agile
                                </span>
                                <span className="badge">
                                    Azure DevOps
                                </span>
                            </div>
                        </div>
                        <div className="project-body-image">
                            <img src={has} alt="has" className="project-image"/>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="project-card-container">
                    <div className="project-card-header">
                        PinGO Delivery System
                        <hr></hr>
                    </div>
                    <div className="project-card-body">
                        <div className="project-body-text">
                        Contracted by RTT Couriers to help develop the PinGO delivery system, used by clients like Checkers Sixty60, Nando’s, and KFC. Worked across the full stack—frontend, backend, and database. Built user-friendly interfaces, reliable APIs, and optimized database procedures. The system allows controllers to track drivers, monitor deliveries, and manage queries, ensuring smooth coordination between drivers, controllers, and customers.
                            <div className="tech-icons">
                                <span className="badge">
                                    <img src={csharp} alt="csharp" width={20} height={20} style={{ verticalAlign: 'middle', paddingRight: '3px' }}/>
                                    C#
                                </span>
                                <span className="badge">
                                    <img src={dotnet} alt="dotnet" width={20} height={20} style={{ verticalAlign: 'middle', paddingRight: '3px' }}/>
                                    .NET Core
                                </span>
                                <span className="badge">
                                    <img src={sql} alt="dotnet" width={20} height={20} style={{ verticalAlign: 'middle', paddingRight: '3px' }}/>
                                    SQL
                                </span>
                                <span className="badge">
                                    Blazor
                                </span>
                                <span className="badge">
                                    Agile
                                </span>
                                <span className="badge">
                                    Azure DevOps
                                </span>
                            </div>
                        </div>
                        <div className="project-body-image">
                            <img src={pingo} alt="omi" className="project-image"/>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="project-card-container">
                    <div className="project-card-header">
                        TF Marketing CRM
                        <hr></hr>
                    </div>
                    <div className="project-card-body">
                        <div className="project-body-text">
                        Independently developed a custom CRM system for a client, covering database design, backend logic, and frontend interface. The system enables users to upload client information, manage contacts, and run marketing campaigns. Key features include client data tracking, campaign organization, and simple reporting tools. Designed with a focus on usability and efficiency, the CRM supports streamlined customer management tailored to the client’s business operations.
                            <div className="tech-icons">
                                <span className="badge">
                                    <img src={csharp} alt="csharp" width={20} height={20} style={{ verticalAlign: 'middle', paddingRight: '3px' }}/>
                                    C#
                                </span>
                                <span className="badge">
                                    <img src={dotnet} alt="dotnet" width={20} height={20} style={{ verticalAlign: 'middle', paddingRight: '3px' }}/>
                                    .NET Core
                                </span>
                                <span className="badge">
                                    EF Core
                                </span>
                                <span className="badge">
                                    Razor Pages
                                </span>
                                <span className="badge">
                                    Agile
                                </span>
                                <span className="badge">
                                    BitBucket
                                </span>
                            </div>
                        </div>
                        <div className="project-body-image">
                            <img src={crm} alt="omi" className="project-image"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project; 