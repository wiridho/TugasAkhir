import { BiMoneyWithdraw, BiMoney } from "react-icons/bi";

const Beranda = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-8 max-w-3xl mx-auto">
        <div className="">
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div className="flex flex-col bg-slate-400">
              <BiMoney className="w-10 h-10" />
              <p>Isi Saldo</p>
            </div>
            <div className="flex flex-col bg-slate-100">
              <BiMoneyWithdraw className="w-10 h-10" />
              <p>Penarikan</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-800">2</div>
      </div>
    </>
  );
};

export default Beranda;
