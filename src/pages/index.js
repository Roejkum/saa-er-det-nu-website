import React from 'react'
// import PropTypes from 'prop-types'
// import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import BarCount from '../components/BarCount/BarCount';
import ContactForm from '../components/ContactForm/ContactForm';

export default class IndexPage extends React.Component {
  state = {
    totalSigners: null
  }

  componentDidMount() {
      fetch('/.netlify/functions/getSubscriberAmount', {
        method: 'POST'
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(JSON.stringify(data.msg));
        this.setState({totalSigners: data.msg})
      })
      .catch((error) => console.log(error));
  }

  render() {
    
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Så er det nu gutter 2!</h1>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container-fluid white-box">
            <div className="row">
              <div className="col-xs-12">
                <h2>Skriv under nu!</h2>
                <p>Vi skal snart til valg og det er nu vi skal vise politikerne at tiden til små skridt og tomme løfter er ovre. Vi vil se omgående handling fra første år af en ny regerings levetid. </p>
                <BarCount amount={this.state.totalSigners} totalAmount="10"/>
                <ContactForm/>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array,
//     }),
//   }),
// }

// export const pageQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] },
//       filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
//     ) {
//       edges {
//         node {
//           excerpt(pruneLength: 400)
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             templateKey
//             date(formatString: "MMMM DD, YYYY")
//           }
//         }
//       }
//     }
//   }
// `
