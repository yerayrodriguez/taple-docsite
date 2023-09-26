(function() {var implementors = {
"taple_core":[["impl BorshSerialize for <a class=\"struct\" href=\"taple_core/struct.ValidationProof.html\" title=\"struct taple_core::ValidationProof\">ValidationProof</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"taple_core/identifier/struct.DigestIdentifier.html\" title=\"struct taple_core::identifier::DigestIdentifier\">DigestIdentifier</a>: BorshSerialize,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.1/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>: BorshSerialize,\n    <a class=\"struct\" href=\"taple_core/identifier/struct.KeyIdentifier.html\" title=\"struct taple_core::identifier::KeyIdentifier\">KeyIdentifier</a>: BorshSerialize,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.u64.html\">u64</a>: BorshSerialize,</span>"],["impl BorshSerialize for <a class=\"struct\" href=\"taple_core/request/struct.TapleRequest.html\" title=\"struct taple_core::request::TapleRequest\">TapleRequest</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"taple_core/identifier/struct.DigestIdentifier.html\" title=\"struct taple_core::identifier::DigestIdentifier\">DigestIdentifier</a>: BorshSerialize,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.72.1/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"taple_core/identifier/struct.DigestIdentifier.html\" title=\"struct taple_core::identifier::DigestIdentifier\">DigestIdentifier</a>&gt;: BorshSerialize,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.72.1/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.u64.html\">u64</a>&gt;: BorshSerialize,\n    <a class=\"struct\" href=\"taple_core/signature/struct.Signed.html\" title=\"struct taple_core::signature::Signed\">Signed</a>&lt;<a class=\"enum\" href=\"taple_core/request/enum.EventRequest.html\" title=\"enum taple_core::request::EventRequest\">EventRequest</a>&gt;: BorshSerialize,\n    <a class=\"enum\" href=\"taple_core/request/enum.RequestState.html\" title=\"enum taple_core::request::RequestState\">RequestState</a>: BorshSerialize,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.72.1/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.bool.html\">bool</a>&gt;: BorshSerialize,</span>"],["impl BorshSerialize for <a class=\"struct\" href=\"taple_core/struct.Metadata.html\" title=\"struct taple_core::Metadata\">Metadata</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.1/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>: BorshSerialize,\n    <a class=\"struct\" href=\"taple_core/identifier/struct.DigestIdentifier.html\" title=\"struct taple_core::identifier::DigestIdentifier\">DigestIdentifier</a>: BorshSerialize,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.u64.html\">u64</a>: BorshSerialize,</span>"],["impl BorshSerialize for <a class=\"enum\" href=\"taple_core/identifier/derive/enum.KeyDerivator.html\" title=\"enum taple_core::identifier::derive::KeyDerivator\">KeyDerivator</a>"],["impl BorshSerialize for <a class=\"struct\" href=\"taple_core/identifier/struct.KeyIdentifier.html\" title=\"struct taple_core::identifier::KeyIdentifier\">KeyIdentifier</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.1/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.u8.html\">u8</a>&gt;: BorshSerialize,\n    <a class=\"enum\" href=\"taple_core/identifier/derive/enum.KeyDerivator.html\" title=\"enum taple_core::identifier::derive::KeyDerivator\">KeyDerivator</a>: BorshSerialize,</span>"],["impl&lt;T&gt; BorshSerialize for <a class=\"struct\" href=\"taple_core/message/struct.MessageContent.html\" title=\"struct taple_core::message::MessageContent\">MessageContent</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"taple_core/identifier/struct.KeyIdentifier.html\" title=\"struct taple_core::identifier::KeyIdentifier\">KeyIdentifier</a>: BorshSerialize,\n    T: BorshSerialize + <a class=\"trait\" href=\"taple_core/message/trait.TaskCommandContent.html\" title=\"trait taple_core::message::TaskCommandContent\">TaskCommandContent</a>,</span>"],["impl BorshSerialize for <a class=\"struct\" href=\"taple_core/identifier/struct.SignatureIdentifier.html\" title=\"struct taple_core::identifier::SignatureIdentifier\">SignatureIdentifier</a><span class=\"where fmt-newline\">where\n    <a class=\"enum\" href=\"taple_core/identifier/derive/enum.SignatureDerivator.html\" title=\"enum taple_core::identifier::derive::SignatureDerivator\">SignatureDerivator</a>: BorshSerialize,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.1/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.u8.html\">u8</a>&gt;: BorshSerialize,</span>"],["impl BorshSerialize for <a class=\"struct\" href=\"taple_core/struct.EvaluationResponse.html\" title=\"struct taple_core::EvaluationResponse\">EvaluationResponse</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"taple_core/struct.ValueWrapper.html\" title=\"struct taple_core::ValueWrapper\">ValueWrapper</a>: BorshSerialize,\n    <a class=\"struct\" href=\"taple_core/identifier/struct.DigestIdentifier.html\" title=\"struct taple_core::identifier::DigestIdentifier\">DigestIdentifier</a>: BorshSerialize,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.bool.html\">bool</a>: BorshSerialize,</span>"],["impl BorshSerialize for <a class=\"struct\" href=\"taple_core/struct.ApprovalEntity.html\" title=\"struct taple_core::ApprovalEntity\">ApprovalEntity</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"taple_core/identifier/struct.DigestIdentifier.html\" title=\"struct taple_core::identifier::DigestIdentifier\">DigestIdentifier</a>: BorshSerialize,\n    <a class=\"struct\" href=\"taple_core/signature/struct.Signed.html\" title=\"struct taple_core::signature::Signed\">Signed</a>&lt;<a class=\"struct\" href=\"taple_core/struct.ApprovalRequest.html\" title=\"struct taple_core::ApprovalRequest\">ApprovalRequest</a>&gt;: BorshSerialize,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.72.1/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"taple_core/signature/struct.Signed.html\" title=\"struct taple_core::signature::Signed\">Signed</a>&lt;<a class=\"struct\" href=\"taple_core/struct.ApprovalResponse.html\" title=\"struct taple_core::ApprovalResponse\">ApprovalResponse</a>&gt;&gt;: BorshSerialize,\n    <a class=\"enum\" href=\"taple_core/enum.ApprovalState.html\" title=\"enum taple_core::ApprovalState\">ApprovalState</a>: BorshSerialize,\n    <a class=\"struct\" href=\"taple_core/identifier/struct.KeyIdentifier.html\" title=\"struct taple_core::identifier::KeyIdentifier\">KeyIdentifier</a>: BorshSerialize,</span>"],["impl&lt;T&gt; BorshSerialize for <a class=\"struct\" href=\"taple_core/signature/struct.Signed.html\" title=\"struct taple_core::signature::Signed\">Signed</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: BorshSerialize + BorshSerialize + BorshDeserialize + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    <a class=\"struct\" href=\"taple_core/signature/struct.Signature.html\" title=\"struct taple_core::signature::Signature\">Signature</a>: BorshSerialize,</span>"],["impl BorshSerialize for <a class=\"enum\" href=\"taple_core/request/enum.RequestState.html\" title=\"enum taple_core::request::RequestState\">RequestState</a>"],["impl BorshSerialize for <a class=\"struct\" href=\"taple_core/struct.ValueWrapper.html\" title=\"struct taple_core::ValueWrapper\">ValueWrapper</a>"],["impl BorshSerialize for <a class=\"struct\" href=\"taple_core/request/struct.EOLRequest.html\" title=\"struct taple_core::request::EOLRequest\">EOLRequest</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"taple_core/identifier/struct.DigestIdentifier.html\" title=\"struct taple_core::identifier::DigestIdentifier\">DigestIdentifier</a>: BorshSerialize,</span>"],["impl BorshSerialize for <a class=\"struct\" href=\"taple_core/request/struct.TransferRequest.html\" title=\"struct taple_core::request::TransferRequest\">TransferRequest</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"taple_core/identifier/struct.DigestIdentifier.html\" title=\"struct taple_core::identifier::DigestIdentifier\">DigestIdentifier</a>: BorshSerialize,\n    <a class=\"struct\" href=\"taple_core/identifier/struct.KeyIdentifier.html\" title=\"struct taple_core::identifier::KeyIdentifier\">KeyIdentifier</a>: BorshSerialize,</span>"],["impl BorshSerialize for <a class=\"struct\" href=\"taple_core/request/struct.FactRequest.html\" title=\"struct taple_core::request::FactRequest\">FactRequest</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"taple_core/identifier/struct.DigestIdentifier.html\" title=\"struct taple_core::identifier::DigestIdentifier\">DigestIdentifier</a>: BorshSerialize,\n    <a class=\"struct\" href=\"taple_core/struct.ValueWrapper.html\" title=\"struct taple_core::ValueWrapper\">ValueWrapper</a>: BorshSerialize,</span>"],["impl BorshSerialize for <a class=\"enum\" href=\"taple_core/identifier/derive/digest/enum.DigestDerivator.html\" title=\"enum taple_core::identifier::derive::digest::DigestDerivator\">DigestDerivator</a>"],["impl BorshSerialize for <a class=\"struct\" href=\"taple_core/identifier/struct.DigestIdentifier.html\" title=\"struct taple_core::identifier::DigestIdentifier\">DigestIdentifier</a><span class=\"where fmt-newline\">where\n    <a class=\"enum\" href=\"taple_core/identifier/derive/digest/enum.DigestDerivator.html\" title=\"enum taple_core::identifier::derive::digest::DigestDerivator\">DigestDerivator</a>: BorshSerialize,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.1/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.u8.html\">u8</a>&gt;: BorshSerialize,</span>"],["impl BorshSerialize for <a class=\"enum\" href=\"taple_core/request/enum.EventRequest.html\" title=\"enum taple_core::request::EventRequest\">EventRequest</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"taple_core/request/struct.StartRequest.html\" title=\"struct taple_core::request::StartRequest\">StartRequest</a>: BorshSerialize,\n    <a class=\"struct\" href=\"taple_core/request/struct.FactRequest.html\" title=\"struct taple_core::request::FactRequest\">FactRequest</a>: BorshSerialize,\n    <a class=\"struct\" href=\"taple_core/request/struct.TransferRequest.html\" title=\"struct taple_core::request::TransferRequest\">TransferRequest</a>: BorshSerialize,\n    <a class=\"struct\" href=\"taple_core/request/struct.EOLRequest.html\" title=\"struct taple_core::request::EOLRequest\">EOLRequest</a>: BorshSerialize,</span>"],["impl BorshSerialize for <a class=\"struct\" href=\"taple_core/struct.Event.html\" title=\"struct taple_core::Event\">Event</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"taple_core/identifier/struct.DigestIdentifier.html\" title=\"struct taple_core::identifier::DigestIdentifier\">DigestIdentifier</a>: BorshSerialize,\n    <a class=\"struct\" href=\"taple_core/signature/struct.Signed.html\" title=\"struct taple_core::signature::Signed\">Signed</a>&lt;<a class=\"enum\" href=\"taple_core/request/enum.EventRequest.html\" title=\"enum taple_core::request::EventRequest\">EventRequest</a>&gt;: BorshSerialize,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.u64.html\">u64</a>: BorshSerialize,\n    <a class=\"struct\" href=\"taple_core/struct.ValueWrapper.html\" title=\"struct taple_core::ValueWrapper\">ValueWrapper</a>: BorshSerialize,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.bool.html\">bool</a>: BorshSerialize,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.1/std/collections/hash/set/struct.HashSet.html\" title=\"struct std::collections::hash::set::HashSet\">HashSet</a>&lt;<a class=\"struct\" href=\"taple_core/signature/struct.Signature.html\" title=\"struct taple_core::signature::Signature\">Signature</a>&gt;: BorshSerialize,</span>"],["impl BorshSerialize for <a class=\"struct\" href=\"taple_core/request/struct.StartRequest.html\" title=\"struct taple_core::request::StartRequest\">StartRequest</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"taple_core/identifier/struct.DigestIdentifier.html\" title=\"struct taple_core::identifier::DigestIdentifier\">DigestIdentifier</a>: BorshSerialize,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.1/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>: BorshSerialize,\n    <a class=\"struct\" href=\"taple_core/identifier/struct.KeyIdentifier.html\" title=\"struct taple_core::identifier::KeyIdentifier\">KeyIdentifier</a>: BorshSerialize,</span>"],["impl BorshSerialize for <a class=\"struct\" href=\"taple_core/struct.EvaluationRequest.html\" title=\"struct taple_core::EvaluationRequest\">EvaluationRequest</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"taple_core/signature/struct.Signed.html\" title=\"struct taple_core::signature::Signed\">Signed</a>&lt;<a class=\"enum\" href=\"taple_core/request/enum.EventRequest.html\" title=\"enum taple_core::request::EventRequest\">EventRequest</a>&gt;: BorshSerialize,\n    SubjectContext: BorshSerialize,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.u64.html\">u64</a>: BorshSerialize,</span>"],["impl BorshSerialize for <a class=\"enum\" href=\"taple_core/enum.ApprovalState.html\" title=\"enum taple_core::ApprovalState\">ApprovalState</a>"],["impl BorshSerialize for <a class=\"struct\" href=\"taple_core/signature/struct.Signature.html\" title=\"struct taple_core::signature::Signature\">Signature</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"taple_core/identifier/struct.KeyIdentifier.html\" title=\"struct taple_core::identifier::KeyIdentifier\">KeyIdentifier</a>: BorshSerialize,\n    <a class=\"struct\" href=\"taple_core/struct.TimeStamp.html\" title=\"struct taple_core::TimeStamp\">TimeStamp</a>: BorshSerialize,\n    <a class=\"struct\" href=\"taple_core/identifier/struct.SignatureIdentifier.html\" title=\"struct taple_core::identifier::SignatureIdentifier\">SignatureIdentifier</a>: BorshSerialize,</span>"],["impl BorshSerialize for <a class=\"enum\" href=\"taple_core/identifier/derive/enum.SignatureDerivator.html\" title=\"enum taple_core::identifier::derive::SignatureDerivator\">SignatureDerivator</a>"],["impl BorshSerialize for <a class=\"struct\" href=\"taple_core/struct.TimeStamp.html\" title=\"struct taple_core::TimeStamp\">TimeStamp</a>"],["impl BorshSerialize for <a class=\"enum\" href=\"taple_core/crypto/enum.KeyPair.html\" title=\"enum taple_core::crypto::KeyPair\">KeyPair</a>"],["impl BorshSerialize for <a class=\"struct\" href=\"taple_core/struct.ApprovalRequest.html\" title=\"struct taple_core::ApprovalRequest\">ApprovalRequest</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"taple_core/signature/struct.Signed.html\" title=\"struct taple_core::signature::Signed\">Signed</a>&lt;<a class=\"enum\" href=\"taple_core/request/enum.EventRequest.html\" title=\"enum taple_core::request::EventRequest\">EventRequest</a>&gt;: BorshSerialize,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.u64.html\">u64</a>: BorshSerialize,\n    <a class=\"struct\" href=\"taple_core/struct.ValueWrapper.html\" title=\"struct taple_core::ValueWrapper\">ValueWrapper</a>: BorshSerialize,\n    <a class=\"struct\" href=\"taple_core/identifier/struct.DigestIdentifier.html\" title=\"struct taple_core::identifier::DigestIdentifier\">DigestIdentifier</a>: BorshSerialize,</span>"],["impl BorshSerialize for <a class=\"struct\" href=\"taple_core/struct.ApprovalResponse.html\" title=\"struct taple_core::ApprovalResponse\">ApprovalResponse</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"taple_core/identifier/struct.DigestIdentifier.html\" title=\"struct taple_core::identifier::DigestIdentifier\">DigestIdentifier</a>: BorshSerialize,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.bool.html\">bool</a>: BorshSerialize,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()