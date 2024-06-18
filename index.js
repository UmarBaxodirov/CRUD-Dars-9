const AddBtn = document.getElementById("add_btn")
const modal = document.getElementById("modal")
const closeBtn = document.getElementById("closeBtn")
const closeBtn2 = document.getElementById("closeBtn2")
const first_name = document.getElementById("first_name")
const submit = document.getElementById("submit")
const last_name = document.getElementById("last_name")
const company = document.getElementById("company")
const phone = document.getElementById("phone")
const tbody = document.getElementById("tbody")
const loaderFuction= document.querySelector(".loader")

AddBtn.addEventListener("click", () => {
  modal.classList.toggle("hidden")
})
closeBtn.addEventListener("click", () => {
  modal.classList.toggle("hidden")
})
closeBtn2.addEventListener("click", () => {
  modal.classList.toggle("hidden")
})
submit.addEventListener("click", () => {
  tbody.innerHTML += `
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row"
                            class="max-[630px]:text-[10px] max-[475px]:text-[7px] max-[382px]:text-[7px] max-[371px]:text-[5px] px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            ${first_name.value}
                        </th>
                        <td
                            class="max-[630px]:text-[10px] max-[531px]:text-[7px] max-[433px]:text-[5px] max-[422px]:text-[3px] max-[352px]:text-[1px] px-6 py-4">
                            ${last_name.value} yers old
                        </td>
                        <td
                            class="max-[630px]:text-[10px] max-[531px]:text-[7px] max-[433px]:text-[5px] max-[400px]:text-[3px] max-[383px]:text-[1px] px-6 py-4">
                          +998  ${company.value} 
                        </td>
                        <td class="max-[630px]:text-[10px] max-[475px]:text-[7px] max-[382px]:text-[5px] px-6 py-4">
                            $${phone.value}
                        </td>
                        <td class="px-6 py-4 flex gap-[20px]">
                            <a href="#"
                                class="max-[630px]:text-[10px] ml-[-20px] font-medium text-blue-600 dark:text-blue-500 hover:underline max-[440px]:text-[5px] max-[371px]:text-[3px]">Edit
                            </a>
                            <a href="#"
                                class="max-[630px]:text-[10px] font-medium text-red-600 dark:text-blue-500 hover:underline max-[440px]:text-[5px] max-[371px]:text-[3px]">Delete
                            </a>
                        </td>
                    </tr>
  `

  first_name.value = ''
  last_name.value = ''
  company.value = ''
  phone.value = ''

})
submit.addEventListener("click", () => {
  modal.classList.toggle("hidden")
})
setTimeout(() => {
  loaderFuction.classList.add('hidden')
}, 1500);