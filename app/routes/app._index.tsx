import {json} from "@remix-run/node"
import {useNavigate} from "@remix-run/react"
import {Page, Layout, Text, Card,} from "@shopify/polaris"
import shopify from "~/shopify.server"

export const loader = async ({request}) => {
  await shopify.authenticate.admin(request)
  return json({hello: "world"})
}


export default function Index() {
  const navigate = useNavigate()

  return (
    <Page>
      <ui-title-bar title="Swaggy Gift Management App">
        <button variant="primary" onClick={() => navigate("/app/organization/new")}>
          Create Swaggy Organization
        </button>
      </ui-title-bar>
      <Layout>
        <Layout.Section>
          <Card>
            <Text as="p">TODO Show some data here</Text>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  )
}
