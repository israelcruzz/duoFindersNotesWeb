import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../components/input";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate()

  return (
    <>
      <header className="w-full h-[144px] bg-[#232129] flex items-center px-24">
        <button className="text-white" onClick={() => navigate('/')}>
          <FiArrowLeft size={24} />
        </button>
      </header>

      <form className="max-w-[400px] mx-auto flex flex-col items-center justify-center -mt-24">
        <div className="mb-6 relative">
          <img
            src="https://avatars.githubusercontent.com/u/128995099?v=4"
            alt="Profile Photo"
            className="rounded-full w-[186px] h-[186px]"
          />

          <label
            htmlFor="avatar"
            className="absolute w-12 h-12 bg-[#FF9000] rounded-full flex items-center justify-center cursor-pointer bottom-0 right-0"
          >
            <FiCamera size={24} />
            <input type="file" id="avatar" className="hidden" />
          </label>
        </div>

        <div className="w-full flex gap-4 flex-col mb-6">
          <Input icon={FiUser} value="Israel Cruz" />
          <Input icon={FiMail} value="israel@dev.com"  />
          <Input icon={FiLock} placeholder="Senha atual" />
          <Input icon={FiLock} placeholder="Nova senha" />
        </div>

        <Button title="Salvar" />
      </form>
    </>
  );
}

export default Profile;
