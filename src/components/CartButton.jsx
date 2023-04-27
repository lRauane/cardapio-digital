import * as Dialog from '@radix-ui/react-dialog';
import CartContent from './CartContent';
import { X } from '@phosphor-icons/react';
import { BiCart } from 'react-icons/bi';

const CartButton = () => {
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger
          type="button"
          className="bg-amber-400 rounded-sm p-3  hover:bg-amber-400/80 md:p-4"
        >
          <button>
            <BiCart size={27} color='white' />
          </button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/40 fixed inset-0 " />

          <Dialog.Content className="fixed p-5 right-0 top-0 h-full w-[300px] md:w-[600px] z-50 bg-white shadow-lg  transition-transform ease-out ">
            <Dialog.Close className="absolute right-6 top-6 text-zinc-400 rounded-lg hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-offset-2 focus:ring-offset-zinc-900">
              <X size={24} aria-label="Fechar" />
            </Dialog.Close>

            <Dialog.Title className="text-3xl leading-tight font-extrabold">
              Carrinho
            </Dialog.Title>

            <CartContent />
          </Dialog.Content>
        </Dialog.Portal>

      </Dialog.Root>
    </div>
  );
}

export default CartButton;
