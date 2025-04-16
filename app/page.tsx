import Counter from "@/components/Counter";

export default function CollapsibleSidebar() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 1, padding: "20px" }}>
        <h3>Counter App</h3>
        <Counter />
      </div>
    </div>
  );
}
