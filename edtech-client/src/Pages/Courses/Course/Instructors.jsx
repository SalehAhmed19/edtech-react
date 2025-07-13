import SectionTitleTwo from "../../../Components/SectionTitle/SectionTitleTwo";

export default function Instructors() {
  return (
    <div className="flex flex-col gap-5">
      <SectionTitleTwo title={"Instuctors"} />
      <div className="flex items-center gap-3 p-2 border border-[#0000001a] rounded-md">
        <div>
          <img
            className="rounded-full w-16"
            src="https://scontent.fcla7-1.fna.fbcdn.net/v/t39.30808-6/508494049_122253813602213630_2196280106525126952_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFVcZrjrg1NVwfkRcxDyPU0upEpwg2sD726kSnCDawPvUbgRmuUD_0W0e2k-_DiA2WSUQ8FqQ8xamtC9nPLdwBG&_nc_ohc=kJ8C3U85xb0Q7kNvwFzp97i&_nc_oc=AdnkFx0X9UmywV90EqQn31GRfTlXjZxpMLG8zx61gCWF7gSdsePCPisEpwhpRpPYjwM&_nc_zt=23&_nc_ht=scontent.fcla7-1.fna&_nc_gid=k-0TYGp8Sumf7ZTJvSxAhg&oh=00_AfQYNvnJn1lXkDNPjEd1x-NThz3cMYp19pnzULzW9O5sqg&oe=68791D29"
            alt=""
          />
        </div>

        <div>
          <h5 className="font-bold text-xl">Saleh Ahmed Mahin</h5>
          <p>Developer, CodeVexa</p>
        </div>
      </div>
      <div className="flex items-center gap-3 p-2 border border-[#0000001a] rounded-md">
        <div>
          <img
            className="rounded-full w-16"
            src="https://scontent.fcla7-1.fna.fbcdn.net/v/t39.30808-6/508494049_122253813602213630_2196280106525126952_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFVcZrjrg1NVwfkRcxDyPU0upEpwg2sD726kSnCDawPvUbgRmuUD_0W0e2k-_DiA2WSUQ8FqQ8xamtC9nPLdwBG&_nc_ohc=kJ8C3U85xb0Q7kNvwFzp97i&_nc_oc=AdnkFx0X9UmywV90EqQn31GRfTlXjZxpMLG8zx61gCWF7gSdsePCPisEpwhpRpPYjwM&_nc_zt=23&_nc_ht=scontent.fcla7-1.fna&_nc_gid=k-0TYGp8Sumf7ZTJvSxAhg&oh=00_AfQYNvnJn1lXkDNPjEd1x-NThz3cMYp19pnzULzW9O5sqg&oe=68791D29"
            alt=""
          />
        </div>

        <div>
          <h5 className="font-bold text-xl">Saleh Ahmed Mahin</h5>
          <p>Developer, CodeVexa</p>
        </div>
      </div>
    </div>
  );
}
