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
          className="bg-zinc-800 rounded-sm p-3 hover:bg-zinc-900/80 md:p-4"
        >
          <button>
            <BiCart size={27} color='white' />
          </button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/40 fixed inset-0 " />

          <Dialog.Content className="absolute p-10 bg-white rounded-2xl w-full max-w-md top-20 left-3/4 -translate-x-1/2 -translate-y-1/2">
            <Dialog.Close className="absolute right-6 top-6 text-zinc-400 rounded-lg hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-zinc-900">
              <X size={24} aria-label="Fechar" />
            </Dialog.Close>

            <Dialog.Title className="text-3xl leading-tight font-extrabold">
              Criar tarefas
            </Dialog.Title>

            <CartContent />
          </Dialog.Content>
        </Dialog.Portal>

      </Dialog.Root>
    </div>
  );
}

export default CartButton;
