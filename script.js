// メンバーデータ（配列＋オブジェクト）
const members = [
  {
    name: "佐藤",
    role: "engineer",
    comment: "フロントエンドが得意です！"
  },
  {
    name: "鈴木",
    role: "designer",
    comment: "UI/UX を担当しています。"
  },
  {
    name: "田中",
    role: "engineer",
    comment: "バックエンドもできます。"
  },
  {
    name: "高橋",
    role: "designer",
    comment: "イラストも描けます。"
  },
  {
    name: "山本",
    role: "engineer",
    comment: "React を勉強中です。"
  }
];


// カードを表示する関数
function renderMembers(list) {
  const container = document.getElementById("member-list");
  container.innerHTML = ""; // 一度リセット

  list.forEach(member => {
    const card = document.createElement("div");
    card.className = "bg-white rounded shadow p-4";

    card.innerHTML = `
      <h2 class="text-xl font-bold mb-2">${member.name}</h2>
      <p class="text-blue-600 font-semibold mb-1">${member.role}</p>
      <p class="text-gray-700">${member.comment}</p>
    `;

    container.appendChild(card);
  });
}

// 初期表示（全員）
renderMembers(members);

// 絞り込み（発展）
const buttons = document.querySelectorAll(".filter-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const role = btn.dataset.role;

    if (role === "all") {
      renderMembers(members);
    } else {
      const filtered = members.filter(m => m.role === role);
      console.log("filter結果:", filtered); // PR本文に書く用
      renderMembers(filtered);
    }
  });
});
