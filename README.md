React Recoil Root

- Atom: 상태(state)의 일부
- Selector: atom 혹은 다른 selector 상태를 입력받아 동적인 데이터를 반환하는 순수 함수
	=> Selector가 참조하던 다른 상태가 변경되면 함께 업데이트되며, 이 때 Selector를 바라보던 컴포넌트들이 리렌더링 됨
- todolist filtering
- react Suspense
