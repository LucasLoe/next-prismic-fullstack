import { createClient } from "@/prismicio";
import NavigationComponent from "./NavigationComponent";

export async function Navigation() {
	const client = createClient();
	const navigation = await client.getSingle("navigation");

	return <NavigationComponent navigation={navigation} />;
}
