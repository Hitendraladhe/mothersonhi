import {Component} from 'react'

import {FaEnvelope, FaLinkedin, FaInstagramSquare} from 'react-icons/fa'

import {v4 as uuidv4} from 'uuid'

import './index.css'

const initialList = [
  {
    id: uuidv4(),
    order: 1,
    projectName: 'Food Delivery website',
    projectLink:
      'https://img.freepik.com/free-photo/smiling-young-pretty-delivery-girl-uniform-holds-paper-food-packages-containers-pizza-boxes-looking-camera-green_141793-69539.jpg',
    description:
      'The website boasts an intuitive and visually appealing design, ensuring a seamless experience for users. ',
  },
  {
    id: uuidv4(),
    order: 2,
    projectName: 'Fitness website',
    projectLink: 'https://static.toiimg.com/photo/96125662.cms',
    description:
      'The Fitness website is more than just a virtual gym; it is a holistic fitness companion that empowers users.',
  },
]

class Home extends Component {
  state = {
    projectName: '',
    projectLink: '',
    description: '',
    projectList: initialList,
    isShowProject: false,
  }

  onAddProject = event => {
    event.preventDefault()
    const {projectName, projectLink, description} = this.state
    const newProject = {
      id: uuidv4(),
      projectName,
      projectLink,
      description,
    }
    this.setState(prevState => ({
      projectList: [...prevState.projectList, newProject],
      projectName: '',
      projectLink: '',
      description: '',
    }))
  }

  countUpdate = () => {}

  onClickProjects = () => {
    this.setState({isShowProject: true})
  }

  onChangeProjectName = event => {
    this.setState({projectName: event.target.value})
  }

  onChangeProjectLink = event => {
    this.setState({projectLink: event.target.value})
  }

  onChangeDescription = event => {
    this.setState({description: event.target.value})
  }

  render() {
    const {
      projectName,
      projectLink,
      description,
      projectList,
      isShowProject,
      count,
    } = this.state
    return (
      <>
        <div className="bg-container">
          <nav>
            <h1>Hitendra</h1>
            <ul className="nav-menu">
              <li className="nav-link" onClick={this.onClickAbout}>
                <a href="#about">About</a>
              </li>
              <li className="nav-link">
                <a href="#projects">Projects</a>
              </li>
              <li className="nav-link" onClick={this.onClickContact}>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="container">
            <div className="text-con">
              <h4>Website Developer </h4>
              <h1> Hello, my name is Hitendra Ladhe </h1>
              <p>
                Creative and detail-oriented web developer with a passion
                <br /> for crafting visually stunning and functionally robust{' '}
                <br />
                websites. Proficient in front-end
                <br /> and back-end technologies, adept at translating client
                requirements into
                <br /> seamless online experiences.
              </p>
              <div className="img-con">
                <button type="button" className="btn-yellow">
                  Projects
                </button>
                <button type="button" className="btn-white">
                  Linkedin
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://www.freepnglogos.com/uploads/man-png/man-attitude-pro-9.png"
                className="avatar"
                alt="avatar"
              />
            </div>
          </div>
          <div className="add-product-container">
            <h1 className="heading-add">Add Projects</h1>
            <form className="project-add-form" onSubmit={this.onAddProject}>
              <label htmlFor="projectName" className="name">
                <br />
                Project Name
              </label>

              <br />
              <input
                type="text"
                id="projectName"
                value={projectName}
                onChange={this.onChangeProjectName}
              />
              <br />

              <label htmlFor="projectLink" className="name">
                <br />
                Project link
              </label>
              <br />
              <input
                type="text"
                id="projectName"
                value={projectLink}
                onChange={this.onChangeProjectLink}
              />
              <br />
              <label htmlFor="projectLink" className="name">
                <br />
                Description
              </label>
              <br />
              <textarea
                type="text"
                id="projectName"
                rows="6"
                cols="40"
                value={description}
                onChange={this.onChangeDescription}
              />
              <br />
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
        </div>
        <section id="projects">
          <ul className="pro-container">
            <h1 className="heading">Projects</h1>
            {projectList.map(each => (
              <li className="cart">
                <div className="cart-con" style={{order: `${each.order}`}}>
                  <h3 className="heading">{each.projectName}</h3>
                  <p className="description">{each.description}</p>
                  <button type="button" className="viewBtn">
                    View Projects
                  </button>
                </div>
                <div className="cart-con" style={{order: 1}}>
                  <img src={each.projectLink} alt="img" className="img" />
                </div>
              </li>
            ))}
          </ul>
          <div className="footer">
            <div className="icon">
              <FaInstagramSquare />
              <FaLinkedin />
              <FaEnvelope />
            </div>
            <p className="footer-heading">
              Copy Write @2024 all right reserved
            </p>
          </div>
        </section>
        <section id="about">
          <div className="pro-container">
            <h1 className="heading">About</h1>
            <li className="cart">
              <div className="cart-con">
                <h3 className="heading">Hitendra Ladhe</h3>
                <p className="description">
                  Web Developeronline collection of your best web dev projects
                  that accurately represent your skills, your abilities, and the
                  quality of your work.
                </p>
                <button type="button" className="viewBtn">
                  View More
                </button>
              </div>
              <div className="cart-con">
                <img
                  src="https://www.freepnglogos.com/uploads/man-png/man-attitude-pro-9.png"
                  alt="img"
                  className="img-about"
                />
              </div>
            </li>
          </div>
        </section>
        <section id="contact">
          <div className="pro-container">
            <h1 className="heading">Contact</h1>
            <li className="cart">
              <div className="cart-con">
                <h3 className="heading">Name: Hitendra Ladhe</h3>
                <p className="description">
                  Address : Jalgaon Maharashtra India 425302
                </p>
                <button type="button" className="viewBtn">
                  View More
                </button>
                <div className="icon">
                  <FaInstagramSquare />
                  <FaLinkedin />
                  <FaEnvelope />
                </div>
              </div>
            </li>
          </div>
        </section>
      </>
    )
  }
}

export default Home
