
import ProductPage from '../../components/ProductPage';

export default function VendingMachines() {
  return (
    <ProductPage
      title="Vending Machines"
      image="/vending-machines.jpg"
      description="Smart vending machines designed for modern convenience. Dispense snacks, drinks, and essential goods using intuitive touch interfaces and accept both cash and contactless payments."
      features=["Supports NFC/contactless payments", "Remote stock monitoring", "Built-in refrigeration system", "Custom branding options", "Eco-friendly, energy-saving operation"]
      backLink="/#products"
    />
  );
}
