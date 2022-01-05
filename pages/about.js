import Layout from '../components/layout'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <Layout>
      <motion.div
        key="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-4"
      >
        <div className="mb-6 text-center text-gray-800 dark:text-white">
          Hi, I'm Akshay! I am a chef with a passion for developing unique and interesting recipes web and mobile
          that make a positive impact on peoples lives.
        </div>
        <div className="text-center text-gray-800 dark:text-white">
          In addition being a chef, I enjoy playing sports, learning about psychology,
          listening to podcasts, and geeking out on craft beer and boards games. If any of these things interest you too,
          I'd love to chat!
        </div>
      </motion.div>
    </Layout>
  )
}
