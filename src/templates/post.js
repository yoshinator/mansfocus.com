import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'
// import Form from '../components/common/Form'
import { set } from 'lodash'

/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/
const Post = ({ data, location }) => {
    const post = data.ghostPost
    const [galleryImg, setGalleryImg] = useState("")
    const clickRecord = (e) => {
        e.stopPropagation()
        if (e.target.tagName === "IMG") {
            const lbox = document.getElementById("lbox");
            setGalleryImg(e.target.src)
            lbox.style = "visibility: visible"
        }
    }
    const removeLightBox = () => {
        const lbox = document.getElementById("lbox");
        lbox.style = "visibility: hidden"
    }

    return (
        <>
            <MetaData data={data} location={location} type="article" />
            <Helmet>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>
            </Helmet>
            <Layout>
                <div className="light-box" id="lbox" onClick={removeLightBox}>
                    <span
                        style={{
                            backgroundImage: `url(${galleryImg})`,
                        }}
                    ></span>
                </div>
                <div className="container">
                    <article className="content">
                        {post.feature_image ? (
                            <figure className="post-feature-image">
                                <img
                                    src={post.feature_image}
                                    alt={post.title}
                                />
                            </figure>
                        ) : null}
                        <section className="post-full-content">
                            <h1 className="content-title">{post.title}</h1>

                            {/* The main post content */}
                            <section
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: post.html }}
                                onClick={(e) => clickRecord(e)}
                            />
                        </section>
                    </article>
                    {/* <Form /> */}
                </div>
            </Layout>
        </>
    );
}

Post.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`
