import type { Meta, StoryObj } from '@storybook/react'

import { SiteHeader } from './SiteHeader'

const meta = {
  title: 'Organisms/SiteHeader',
  component: SiteHeader,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SiteHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => {
    return (
      <div className="inset-0 fixed overflow-auto">
        <SiteHeader {...args} />
        <div className="flex min-h-dvh items-center justify-center bg-white text-display-4 italic">
          <div className="grid grid-cols-12 gap-xl text-pretty px-m py-3xl text-black">
            <div className="order-1 col-span-12">
              <h1 className="max-w-heading py-l text-display-2 italic tracking-tighter">Elegantly scale type and space without breakpoints</h1>
            </div>
            <div className="order-2 col-span-8">
              <h2 className="max-w-heading pb-m text-heading-2 font-medium tracking-tight">Thinking of type and space in responsive palettes</h2>
              <div className="">
                <p className="pb-s text-body">Design and develop rapidly using a handful of related rules, building the system, not every permutation of its contents at arbitrary breakpoints. Streamline communication and collaboration between design and development.</p>
                <p className="pb-s text-body">
                  Visualise the invisible: componentize responsive space, codifying its implementation and behavior.
                  <strong>Create bespoke constraints for your projects to ensure consistent and harmonious designs.</strong>
                  {' '}
                  Swap jarring breakpoint jumps for buttery-smooth interpolation, with programmatically tailored type and space scales for every screen size.
                </p>
              </div>
              <p className="text-small">Design and develop rapidly using a handful of related rules, building the system, not every permutation of its contents at arbitrary breakpoints. Streamline communication and collaboration between design and development.</p>
              <div className="flex max-w-text flex-col py-xl text-center text-heading-5 italic">
                "Instead of tightening our grip by loading up on breakpoints, we can let go, embracing the ebb and flow with a more fluid and systematic approach to our design foundations."
                <div className="pt-m text-center text-very-small">Celia MANS – Gnagnagna 2024</div>
              </div>
              <p className="pb-s text-body">Design and develop rapidly using a handful of related rules, building the system, not every permutation of its contents at arbitrary breakpoints. Streamline communication and collaboration between design and development.</p>
              <p className="pb-s text-body">
                Visualise the invisible: componentize responsive space, codifying its implementation and behavior.
                <strong>Create bespoke constraints for your projects to ensure consistent and harmonious designs.</strong>
                {' '}
                Swap jarring breakpoint jumps for buttery-smooth interpolation, with programmatically tailored type and space scales for every screen size.
              </p>
              <p className="pb-s text-small">Design and develop rapidly using a handful of related rules, building the system, not every permutation of its contents at arbitrary breakpoints. Streamline communication and collaboration between design and development.</p>
            </div>
            <div className="order-2 col-span-4">
              <h2 className="max-w-heading pb-m text-heading-5 font-medium">
                Designing
                <wbr />
                {' '}
                with fluid typography
              </h2>
              <div className="">
                <p className="pb-s text-body">
                  Visualise the invisible: componentize responsive space, codifying its implementation and behavior. Create bespoke constraints for your projects to ensure consistent and harmonious designs.
                  <em>Swap jarring breakpoint jumps for buttery-smooth interpolation, with programmatically tailored type and space scales for every screen size.</em>
                </p>
              </div>
              <h2 className="font-regular max-w-heading pb-m pt-l text-heading-5">
                Designing
                <wbr />
                {' '}
                with fluid typography
              </h2>
              <div className="">
                <p className="pb-s text-body">
                  Visualise the invisible: componentize responsive space, codifying its implementation and behavior. Create bespoke constraints for your projects to ensure consistent and harmonious designs.
                  <em>Swap jarring breakpoint jumps for buttery-smooth interpolation, with programmatically tailored type and space scales for every screen size.</em>
                </p>
                <p className="pb-s text-very-small">We’ll typically start a project by defining a suitable body copy font and size at nominated min and max viewport widths.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-h-dvh items-center justify-center bg-orange text-display-4 italic">
          <div className="grid grid-cols-12 gap-xl text-pretty px-m py-3xl text-black">
            <div className="order-1 col-span-12">
              <h1 className="max-w-heading py-l text-display-2 italic tracking-tighter">Elegantly scale type and space without breakpoints</h1>
            </div>
            <div className="order-2 col-span-8">
              <h2 className="max-w-heading pb-m text-heading-2 font-medium tracking-tight">Thinking of type and space in responsive palettes</h2>
              <div className="">
                <p className="pb-s text-body">Design and develop rapidly using a handful of related rules, building the system, not every permutation of its contents at arbitrary breakpoints. Streamline communication and collaboration between design and development.</p>
                <p className="pb-s text-body">
                  Visualise the invisible: componentize responsive space, codifying its implementation and behavior.
                  <strong>Create bespoke constraints for your projects to ensure consistent and harmonious designs.</strong>
                  {' '}
                  Swap jarring breakpoint jumps for buttery-smooth interpolation, with programmatically tailored type and space scales for every screen size.
                </p>
              </div>
              <p className="text-small">Design and develop rapidly using a handful of related rules, building the system, not every permutation of its contents at arbitrary breakpoints. Streamline communication and collaboration between design and development.</p>
              <div className="flex max-w-text flex-col py-xl text-center text-heading-5 italic">
                "Instead of tightening our grip by loading up on breakpoints, we can let go, embracing the ebb and flow with a more fluid and systematic approach to our design foundations."
                <div className="pt-m text-center text-very-small">Celia MANS – Gnagnagna 2024</div>
              </div>
              <p className="pb-s text-body">Design and develop rapidly using a handful of related rules, building the system, not every permutation of its contents at arbitrary breakpoints. Streamline communication and collaboration between design and development.</p>
              <p className="pb-s text-body">
                Visualise the invisible: componentize responsive space, codifying its implementation and behavior.
                <strong>Create bespoke constraints for your projects to ensure consistent and harmonious designs.</strong>
                {' '}
                Swap jarring breakpoint jumps for buttery-smooth interpolation, with programmatically tailored type and space scales for every screen size.
              </p>
              <p className="pb-s text-small">Design and develop rapidly using a handful of related rules, building the system, not every permutation of its contents at arbitrary breakpoints. Streamline communication and collaboration between design and development.</p>
            </div>
            <div className="order-2 col-span-4">
              <h2 className="max-w-heading pb-m text-heading-5 font-medium">
                Designing
                <wbr />
                {' '}
                with fluid typography
              </h2>
              <div className="">
                <p className="pb-s text-body">
                  Visualise the invisible: componentize responsive space, codifying its implementation and behavior. Create bespoke constraints for your projects to ensure consistent and harmonious designs.
                  <em>Swap jarring breakpoint jumps for buttery-smooth interpolation, with programmatically tailored type and space scales for every screen size.</em>
                </p>
              </div>
              <h2 className="font-regular max-w-heading pb-m pt-l text-heading-5">
                Designing
                <wbr />
                {' '}
                with fluid typography
              </h2>
              <div className="">
                <p className="pb-s text-body">
                  Visualise the invisible: componentize responsive space, codifying its implementation and behavior. Create bespoke constraints for your projects to ensure consistent and harmonious designs.
                  <em>Swap jarring breakpoint jumps for buttery-smooth interpolation, with programmatically tailored type and space scales for every screen size.</em>
                </p>
                <p className="pb-s text-very-small">We’ll typically start a project by defining a suitable body copy font and size at nominated min and max viewport widths.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-h-dvh items-center justify-center bg-yellow text-display-4 italic">
          <div className="grid grid-cols-12 gap-xl text-pretty px-m py-3xl text-black">
            <div className="order-1 col-span-12">
              <h1 className="max-w-heading py-l text-display-2 italic tracking-tighter">Elegantly scale type and space without breakpoints</h1>
            </div>
            <div className="order-2 col-span-8">
              <h2 className="max-w-heading pb-m text-heading-2 font-medium tracking-tight">Thinking of type and space in responsive palettes</h2>
              <div className="">
                <p className="pb-s text-body">Design and develop rapidly using a handful of related rules, building the system, not every permutation of its contents at arbitrary breakpoints. Streamline communication and collaboration between design and development.</p>
                <p className="pb-s text-body">
                  Visualise the invisible: componentize responsive space, codifying its implementation and behavior.
                  <strong>Create bespoke constraints for your projects to ensure consistent and harmonious designs.</strong>
                  {' '}
                  Swap jarring breakpoint jumps for buttery-smooth interpolation, with programmatically tailored type and space scales for every screen size.
                </p>
              </div>
              <p className="text-small">Design and develop rapidly using a handful of related rules, building the system, not every permutation of its contents at arbitrary breakpoints. Streamline communication and collaboration between design and development.</p>
              <div className="flex max-w-text flex-col py-xl text-center text-heading-5 italic">
                "Instead of tightening our grip by loading up on breakpoints, we can let go, embracing the ebb and flow with a more fluid and systematic approach to our design foundations."
                <div className="pt-m text-center text-very-small">Celia MANS – Gnagnagna 2024</div>
              </div>
              <p className="pb-s text-body">Design and develop rapidly using a handful of related rules, building the system, not every permutation of its contents at arbitrary breakpoints. Streamline communication and collaboration between design and development.</p>
              <p className="pb-s text-body">
                Visualise the invisible: componentize responsive space, codifying its implementation and behavior.
                <strong>Create bespoke constraints for your projects to ensure consistent and harmonious designs.</strong>
                {' '}
                Swap jarring breakpoint jumps for buttery-smooth interpolation, with programmatically tailored type and space scales for every screen size.
              </p>
              <p className="pb-s text-small">Design and develop rapidly using a handful of related rules, building the system, not every permutation of its contents at arbitrary breakpoints. Streamline communication and collaboration between design and development.</p>
            </div>
            <div className="order-2 col-span-4">
              <h2 className="max-w-heading pb-m text-heading-5 font-medium">
                Designing
                <wbr />
                {' '}
                with fluid typography
              </h2>
              <div className="">
                <p className="pb-s text-body">
                  Visualise the invisible: componentize responsive space, codifying its implementation and behavior. Create bespoke constraints for your projects to ensure consistent and harmonious designs.
                  <em>Swap jarring breakpoint jumps for buttery-smooth interpolation, with programmatically tailored type and space scales for every screen size.</em>
                </p>
              </div>
              <h2 className="font-regular max-w-heading pb-m pt-l text-heading-5">
                Designing
                <wbr />
                {' '}
                with fluid typography
              </h2>
              <div className="">
                <p className="pb-s text-body">
                  Visualise the invisible: componentize responsive space, codifying its implementation and behavior. Create bespoke constraints for your projects to ensure consistent and harmonious designs.
                  <em>Swap jarring breakpoint jumps for buttery-smooth interpolation, with programmatically tailored type and space scales for every screen size.</em>
                </p>
                <p className="pb-s text-very-small">We’ll typically start a project by defining a suitable body copy font and size at nominated min and max viewport widths.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-h-dvh items-center justify-center bg-red text-display-4 italic">
          <div className="grid grid-cols-12 gap-xl text-pretty px-m py-3xl text-black">
            <div className="order-1 col-span-12">
              <h1 className="max-w-heading py-l text-display-2 italic tracking-tighter">Elegantly scale type and space without breakpoints</h1>
            </div>
            <div className="order-2 col-span-8">
              <h2 className="max-w-heading pb-m text-heading-2 font-medium tracking-tight">Thinking of type and space in responsive palettes</h2>
              <div className="">
                <p className="pb-s text-body">Design and develop rapidly using a handful of related rules, building the system, not every permutation of its contents at arbitrary breakpoints. Streamline communication and collaboration between design and development.</p>
                <p className="pb-s text-body">
                  Visualise the invisible: componentize responsive space, codifying its implementation and behavior.
                  <strong>Create bespoke constraints for your projects to ensure consistent and harmonious designs.</strong>
                  {' '}
                  Swap jarring breakpoint jumps for buttery-smooth interpolation, with programmatically tailored type and space scales for every screen size.
                </p>
              </div>
              <p className="text-small">Design and develop rapidly using a handful of related rules, building the system, not every permutation of its contents at arbitrary breakpoints. Streamline communication and collaboration between design and development.</p>
              <div className="flex max-w-text flex-col py-xl text-center text-heading-5 italic">
                "Instead of tightening our grip by loading up on breakpoints, we can let go, embracing the ebb and flow with a more fluid and systematic approach to our design foundations."
                <div className="pt-m text-center text-very-small">Celia MANS – Gnagnagna 2024</div>
              </div>
              <p className="pb-s text-body">Design and develop rapidly using a handful of related rules, building the system, not every permutation of its contents at arbitrary breakpoints. Streamline communication and collaboration between design and development.</p>
              <p className="pb-s text-body">
                Visualise the invisible: componentize responsive space, codifying its implementation and behavior.
                <strong>Create bespoke constraints for your projects to ensure consistent and harmonious designs.</strong>
                {' '}
                Swap jarring breakpoint jumps for buttery-smooth interpolation, with programmatically tailored type and space scales for every screen size.
              </p>
              <p className="pb-s text-small">Design and develop rapidly using a handful of related rules, building the system, not every permutation of its contents at arbitrary breakpoints. Streamline communication and collaboration between design and development.</p>
            </div>
            <div className="order-2 col-span-4">
              <h2 className="max-w-heading pb-m text-heading-5 font-medium">
                Designing
                <wbr />
                {' '}
                with fluid typography
              </h2>
              <div className="">
                <p className="pb-s text-body">
                  Visualise the invisible: componentize responsive space, codifying its implementation and behavior. Create bespoke constraints for your projects to ensure consistent and harmonious designs.
                  <em>Swap jarring breakpoint jumps for buttery-smooth interpolation, with programmatically tailored type and space scales for every screen size.</em>
                </p>
              </div>
              <h2 className="font-regular max-w-heading pb-m pt-l text-heading-5">
                Designing
                <wbr />
                {' '}
                with fluid typography
              </h2>
              <div className="">
                <p className="pb-s text-body">
                  Visualise the invisible: componentize responsive space, codifying its implementation and behavior. Create bespoke constraints for your projects to ensure consistent and harmonious designs.
                  <em>Swap jarring breakpoint jumps for buttery-smooth interpolation, with programmatically tailored type and space scales for every screen size.</em>
                </p>
                <p className="pb-s text-very-small">We’ll typically start a project by defining a suitable body copy font and size at nominated min and max viewport widths.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-h-dvh items-center justify-center bg-blue text-display-4 italic">
          <div className="grid grid-cols-12 gap-xl text-pretty px-m py-3xl text-black">
            <div className="order-1 col-span-12">
              <h1 className="max-w-heading py-l text-display-2 italic tracking-tighter">Elegantly scale type and space without breakpoints</h1>
            </div>
            <div className="order-2 col-span-8">
              <h2 className="max-w-heading pb-m text-heading-2 font-medium tracking-tight">Thinking of type and space in responsive palettes</h2>
              <div className="">
                <p className="pb-s text-body">Design and develop rapidly using a handful of related rules, building the system, not every permutation of its contents at arbitrary breakpoints. Streamline communication and collaboration between design and development.</p>
                <p className="pb-s text-body">
                  Visualise the invisible: componentize responsive space, codifying its implementation and behavior.
                  <strong>Create bespoke constraints for your projects to ensure consistent and harmonious designs.</strong>
                  {' '}
                  Swap jarring breakpoint jumps for buttery-smooth interpolation, with programmatically tailored type and space scales for every screen size.
                </p>
              </div>
              <p className="text-small">Design and develop rapidly using a handful of related rules, building the system, not every permutation of its contents at arbitrary breakpoints. Streamline communication and collaboration between design and development.</p>
              <div className="flex max-w-text flex-col py-xl text-center text-heading-5 italic">
                "Instead of tightening our grip by loading up on breakpoints, we can let go, embracing the ebb and flow with a more fluid and systematic approach to our design foundations."
                <div className="pt-m text-center text-very-small">Celia MANS – Gnagnagna 2024</div>
              </div>
              <p className="pb-s text-body">Design and develop rapidly using a handful of related rules, building the system, not every permutation of its contents at arbitrary breakpoints. Streamline communication and collaboration between design and development.</p>
              <p className="pb-s text-body">
                Visualise the invisible: componentize responsive space, codifying its implementation and behavior.
                <strong>Create bespoke constraints for your projects to ensure consistent and harmonious designs.</strong>
                {' '}
                Swap jarring breakpoint jumps for buttery-smooth interpolation, with programmatically tailored type and space scales for every screen size.
              </p>
              <p className="pb-s text-small">Design and develop rapidly using a handful of related rules, building the system, not every permutation of its contents at arbitrary breakpoints. Streamline communication and collaboration between design and development.</p>
            </div>
            <div className="order-2 col-span-4">
              <h2 className="max-w-heading pb-m text-heading-5 font-medium">
                Designing
                <wbr />
                {' '}
                with fluid typography
              </h2>
              <div className="">
                <p className="pb-s text-body">
                  Visualise the invisible: componentize responsive space, codifying its implementation and behavior. Create bespoke constraints for your projects to ensure consistent and harmonious designs.
                  <em>Swap jarring breakpoint jumps for buttery-smooth interpolation, with programmatically tailored type and space scales for every screen size.</em>
                </p>
              </div>
              <h2 className="font-regular max-w-heading pb-m pt-l text-heading-5">
                Designing
                <wbr />
                {' '}
                with fluid typography
              </h2>
              <div className="">
                <p className="pb-s text-body">
                  Visualise the invisible: componentize responsive space, codifying its implementation and behavior. Create bespoke constraints for your projects to ensure consistent and harmonious designs.
                  <em>Swap jarring breakpoint jumps for buttery-smooth interpolation, with programmatically tailored type and space scales for every screen size.</em>
                </p>
                <p className="pb-s text-very-small">We’ll typically start a project by defining a suitable body copy font and size at nominated min and max viewport widths.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
}
