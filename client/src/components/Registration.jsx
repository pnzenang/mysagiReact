import { LiaUsersCogSolid } from 'react-icons/lia'
import { LiaClipboardListSolid } from 'react-icons/lia'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'
import { LuGroup } from 'react-icons/lu'
import RegistrationFaqs from './RegistrationFaqs'

const Registration = () => {
  return (
    <>
      <section className='pb-10 pt-10 dark:bg-dark lg:pb-[10px] lg:pt-[120px]'>
        <div className=' mx-auto '>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4'>
              <div className='mx-auto mb-[60px] max-w-[800px] text-center lg:mb-[90px]'>
                <h2 className='mb-3 text-3xl font-bold leading-[1.2] text-base-content sm:text-4xl md:text-[40px]'>
                  What is the SAGI registration process?
                </h2>
                <p className='text-base-content '>
                  Your registration depend on the type of member you want to be,
                  as you may already know, SAGI has two types of memberships:
                  the traditional membership and the Pool membership.
                </p>
              </div>
            </div>
          </div>

          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4 md:w-1/2 xl:w-1/4 hover:bg-base-200'>
              <div className='relative mx-auto mb-10 max-w-[370px] text-center'>
                <div className='absolute -right-4 top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]'></div>
                <div className='relative mx-auto mb-8 flex h-[100px] w-[100px] items-center justify-center rounded-[20px] bg-primary text-white'>
                  <LiaUsersCogSolid className='w-10 h-10' />
                </div>
                <h3 className='mb-5 text-2xl font-semibold text-primary'>
                  Individuals
                </h3>
                <p className='text-base-content text-left'>
                  If you belong to an association member of SAGI, get in touch
                  with your association delegates.
                  <br />
                  <br />
                  <span className='font-bold text-primary'>1</span>- The
                  delegates should register you to SAGI as soon as they received
                  your information and can let you know the approximate date
                  when you will become vested.
                  <br />
                  <br />
                  <span className='font-bold text-primary'>2</span>-As a
                  prospective member, you should just sit and relax, waiting for
                  your waiting period to pass, and make sure to send your
                  registration fee to the delegate as he requests it.
                  <br />
                  <br /> <span className='font-bold text-primary'>3</span>-If
                  you do not belong to an association member but still desire to
                  register with SAGI, fill out SAGI POOL form:
                  <a
                    href='https://forms.gle/csrYvQ2RthR8gLJf6'
                    className='text-cyan-600 font-bold '
                  >
                    <br />
                    SAGI POOL REGISTRATION FORM
                  </a>
                  <br />
                  The SAGI POOL specialist will contact you with the next steps.
                </p>
              </div>
            </div>
            <div className='w-full px-4 md:w-1/2 xl:w-1/4 hover:bg-base-200'>
              <div className='relative mx-auto mb-10 max-w-[370px] text-center'>
                <div className='absolute -left-4 top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]'></div>
                <div className='absolute right-[-14px] top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]'></div>
                <div className='mx-auto mb-8 flex h-[100px] w-[100px] items-center justify-center rounded-[20px] bg-primary text-white'>
                  <LiaClipboardListSolid className='w-10 h-10' />
                </div>
                <h3 className='mb-5 text-2xl font-semibold text-primary'>
                  Existing associations.
                </h3>
                <p className='text-base-content text-left'>
                  If your association is already member of SAGI.
                  <br />
                  <br />
                  <span className='font-bold text-primary'>1</span>- The main
                  delegate should create the association's account if it does
                  not exist yet by clicking the button{' '}
                  <span className='font-bold'>REGISTER</span> (top right on this
                  website)
                  {/* <a
                    href='https://forms.gle/6EuKoTdmFff1UxKSA'
                    className='text-cyan-600 font-bold '
                  >
                    <br />
                    SAGI INTRODUCTORY FORM
                  </a> */}
                  <br />
                  <br />
                  <span className='font-bold text-primary'>2</span>- During the
                  registration process, make sure to use your association's
                  existing 4-letter code.
                  <br />
                  <br /> <span className='font-bold text-primary'>3</span>-Once
                  on your association dashboard, make sure to enter your members
                  information as they appear on the list received from SAGI
                  Admin. If there is a mistake let the SAGI admin know so it can
                  be corrected.
                  <br />
                  <br />
                  <span className='font-bold text-primary'>4</span>-Do not worry
                  about the pending status that you will see after you enter
                  their information, the administration will update the status.
                </p>
              </div>
            </div>

            <div className='w-full px-4 md:w-1/2 xl:w-1/4 hover:bg-base-200'>
              <div className='relative mx-auto mb-10 max-w-[370px] text-center'>
                <div className='absolute -left-4 top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]'></div>
                <div className='absolute right-[-14px] top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]'></div>
                <div className='mx-auto mb-8 flex h-[100px] w-[100px] items-center justify-center rounded-[20px] bg-primary text-white'>
                  <LuGroup className='w-10 h-10' />
                </div>
                <h3 className='mb-5 text-2xl font-semibold text-primary'>
                  Retourning Associations
                </h3>
                <p className='text-base-content text-left'>
                  If your association, group or family is just returning to
                  SAGI.
                  <br />
                  <br />
                  <span className='font-bold text-primary'>1</span>- The main
                  delegate should create the association's account if it does
                  not exist yet by clicking the button{' '}
                  <span className='font-bold'>REGISTER</span> (top right on this
                  website)
                  {/* <a
                    href='https://forms.gle/6EuKoTdmFff1UxKSA'
                    className='text-cyan-600 font-bold '
                  >
                    <br />
                    SAGI INTRODUCTORY FORM
                  </a> */}
                  <br />
                  <br />
                  <span className='font-bold text-primary'>2</span>- During the
                  registration process, you can your existing 4-letter code or
                  pick a new one.
                  <br />
                  <br /> <span className='font-bold text-primary'>3</span>-Once
                  on your association's dashboard, make sure to enter your
                  members information as they appear in their official
                  documents. If there is a mistake let the SAGI admin know so it
                  can be corrected.
                  <br />
                  <br />
                  <span className='font-bold text-primary'>4</span>-Do not worry
                  about the pending status that you will see after you enter
                  their information, it will change at the end of the waiting
                  period.
                </p>
              </div>
            </div>
            <div className='w-full px-4 md:w-1/2 xl:w-1/4 hover:bg-base-200'>
              <div className='relative mx-auto mb-10 max-w-[370px] text-center'>
                <div className='absolute left-[-14px] top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]'></div>
                <div className='mx-auto mb-8 flex h-[100px] w-[100px] items-center justify-center rounded-[20px] bg-primary text-white'>
                  <MdOutlineAdminPanelSettings className='w-10 h-10' />
                </div>
                <h3 className='mb-5 text-2xl font-semibold text-primary'>
                  New associations / groups / families.
                </h3>
                <p className='text-base-content text-left'>
                  Your association, group or family is new to SAGI.
                  <br />
                  <br />
                  <span className='font-bold text-primary'>1</span>- The main
                  delegate should create the association's account if it does
                  not exist yet by clicking the button{' '}
                  <span className='font-bold'>REGISTER</span> (top right on this
                  website)
                  {/* <a
                    href='https://forms.gle/6EuKoTdmFff1UxKSA'
                    className='text-cyan-600 font-bold '
                  >
                    <br />
                    SAGI INTRODUCTORY FORM
                  </a> */}
                  <br />
                  <br />
                  <span className='font-bold text-primary'>2</span>- During the
                  registration process, you can your existing 4-letter code or
                  pick a new one.
                  <br />
                  <br /> <span className='font-bold text-primary'>3</span>-Once
                  on your association's dashboard, make sure to enter your
                  members information as they appear in their official
                  documents. If there is a mistake let the SAGI admin know so it
                  can be corrected.
                  <br />
                  <br />
                  <span className='font-bold text-primary'>4</span>-The pending
                  status will change at the end of the waiting period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RegistrationFaqs />
    </>
  )
}
export default Registration
